"""
lora_loader.py
Utility to load Stable-Diffusion 1.5 with scene-specific LoRA weights.

Environment variables
---------------------
SD15_MODEL_PATH : path or HF repo for the SD 1.5 base model
LORA_DIR        : directory containing .safetensors LoRA files

Example
-------
from lora_loader import load_lora_model
pipe = load_lora_model("gunfight")
image = pipe("a cinematic gunfight scene").images[0]
image.save("result.png")
"""

from __future__ import annotations

import os
from typing import Dict

import torch
from diffusers import StableDiffusionPipeline

LORA_MAP: Dict[str, str] = {
    "gunfight": "gunfight.safetensors",
    "car_chase": "car_chase.safetensors",
    "fighting": "hand_to_hand.safetensors",
    "explosion": "explosions.safetensors",
}

__all__ = ["LORA_MAP", "load_lora_model"]


def load_lora_model(scene_type: str):
    """
    Load a Stable Diffusion 1.5 pipeline with the LoRA best suited to *scene_type*.

    Parameters
    ----------
    scene_type : str
        One of the keys in `LORA_MAP`.

    Returns
    -------
    diffusers.StableDiffusionPipeline
        Ready-to-infer pipeline with LoRA weights applied.

    Raises
    ------
    ValueError
        If *scene_type* is not recognized.
    FileNotFoundError
        If the required LoRA file cannot be located.
    """
    if scene_type not in LORA_MAP:
        raise ValueError(
            f"Unknown scene_type '{scene_type}'. "
            f"Available: {', '.join(LORA_MAP.keys())}"
        )

    base_model_path = os.getenv("SD15_MODEL_PATH", "runwayml/stable-diffusion-v1-5")
    lora_dir = os.getenv("LORA_DIR", "./loras")

    lora_path = os.path.join(lora_dir, LORA_MAP[scene_type])
    if not os.path.isfile(lora_path):
        raise FileNotFoundError(
            f"LoRA file '{lora_path}' not found. "
            "Check LORA_DIR env var and file names."
        )

    dtype = torch.float16 if torch.cuda.is_available() else torch.float32
    pipe = StableDiffusionPipeline.from_pretrained(base_model_path, torch_dtype=dtype)

    # diffusers >=0.19 has built-in helper
    pipe.load_lora_weights(lora_path)

    device = "cuda" if torch.cuda.is_available() else "cpu"
    pipe.to(device)

    # Optional memory optimizations
    if hasattr(pipe, "enable_xformers_memory_efficient_attention"):
        pipe.enable_xformers_memory_efficient_attention()

    return pipe
