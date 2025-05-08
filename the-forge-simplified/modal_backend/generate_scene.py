"""
generate_scene.py

This module provides a web endpoint for generating images using Stable Diffusion 1.5
with LoRA weights based on different scene types and violence levels.

The endpoint accepts:
- prompt: The base text prompt for image generation
- scene_type: The type of scene to generate (determines which LoRA to use)
- violence_level: Either 'PG-13' or 'R' to control the intensity of the generated content
"""

import base64
import io
from typing import Dict, Optional

import modal
from PIL import Image

import lora_loader

# Create a Modal stub
stub = modal.Stub("the-forge-engine")

@stub.function(gpu="A10G", timeout=600)
@modal.web_endpoint(method="POST")
def generate_scene(prompt: str, scene_type: str, violence_level: str) -> Dict[str, str]:
    """
    Generate an image based on the provided prompt, scene type, and violence level.
    
    Args:
        prompt: The base text prompt for image generation
        scene_type: The type of scene to generate (determines which LoRA to use)
        violence_level: Either 'PG-13' or 'R' to control the intensity
        
    Returns:
        A dictionary containing either the base64-encoded image or an error message
    """
    try:
        # Validate inputs
        if not prompt or not scene_type or not violence_level:
            return {"error": "Missing required parameters: prompt, scene_type, and violence_level are required"}
            
        if violence_level not in ["PG-13", "R"]:
            return {"error": "Invalid violence_level. Must be either 'PG-13' or 'R'"}
        
        # Modify prompt based on violence level
        if violence_level == "PG-13":
            modified_prompt = f"{prompt}, cinematic, stylized, mild intensity"
        else:  # R rating
            modified_prompt = f"{prompt}, realistic, intense, high-impact, cinematic gore"
        
        print(f"Generating image with prompt: {modified_prompt}")
        print(f"Scene type: {scene_type}")
        print(f"Violence level: {violence_level}")
        
        # Load the appropriate model with LoRA weights
        try:
            pipeline = lora_loader.load_lora_model(scene_type)
        except Exception as e:
            return {"error": f"Failed to load LoRA model for scene type '{scene_type}': {str(e)}"}
        
        # Generate the image
        image = pipeline(modified_prompt, num_inference_steps=30, guidance_scale=7.5).images[0]
        
        # Convert the image to base64
        buffered = io.BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
        
        return {"image_base64": img_str}
        
    except Exception as e:
        return {"error": f"An error occurred during image generation: {str(e)}"}

if __name__ == "__main__":
    # This allows the script to be run directly for testing
    # You can use: modal run generate_scene.py
    with stub.run():
        print("The Forge Engine is running on Modal")
