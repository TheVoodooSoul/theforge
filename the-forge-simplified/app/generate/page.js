"use client";

import { useState } from 'react';

export default function GenerateScene() {
  const [formData, setFormData] = useState({
    sceneType: '',
    characters: '',
    setting: '',
    intensity: 'medium',
    additionalDetails: ''
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedScene, setGeneratedScene] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation with a timeout
    setTimeout(() => {
      const scene = {
        title: formData.sceneType,
        content: `In the ${formData.setting}, ${formData.characters} engage in a ${formData.intensity} action sequence. ${formData.additionalDetails}`,
        date: new Date().toLocaleDateString()
      };
      
      setGeneratedScene(scene);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Generate Action Scene</h1>
      <p>Fill out the form below to create your cinematic action sequence.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sceneType">Scene Type</label>
          <select 
            id="sceneType" 
            name="sceneType" 
            className="form-control"
            value={formData.sceneType}
            onChange={handleChange}
            required
          >
            <option value="">Select a scene type</option>
            <option value="Car Chase">Car Chase</option>
            <option value="Hand-to-Hand Combat">Hand-to-Hand Combat</option>
            <option value="Shootout">Shootout</option>
            <option value="Escape Sequence">Escape Sequence</option>
            <option value="Heist">Heist</option>
            <option value="Battle Scene">Battle Scene</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="characters">Characters</label>
          <input 
            type="text" 
            id="characters" 
            name="characters" 
            className="form-control"
            placeholder="E.g., A rogue spy and three assassins"
            value={formData.characters}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="setting">Setting</label>
          <input 
            type="text" 
            id="setting" 
            name="setting" 
            className="form-control"
            placeholder="E.g., Abandoned warehouse in Tokyo"
            value={formData.setting}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="intensity">Intensity</label>
          <select 
            id="intensity" 
            name="intensity" 
            className="form-control"
            value={formData.intensity}
            onChange={handleChange}
          >
            <option value="low">Low - Subtle tension</option>
            <option value="medium">Medium - Significant action</option>
            <option value="high">High - Extreme, high-stakes action</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="additionalDetails">Additional Details</label>
          <textarea 
            id="additionalDetails" 
            name="additionalDetails" 
            className="form-control"
            rows="4"
            placeholder="Any specific elements you want included in the scene"
            value={formData.additionalDetails}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="btn" disabled={isGenerating}>
          {isGenerating ? 'Generating...' : 'Generate Scene'}
        </button>
      </form>
      
      {generatedScene && (
        <div className="generated-scene">
          <h2>Generated Scene: {generatedScene.title}</h2>
          <p className="scene-date">Created on {generatedScene.date}</p>
          <div className="scene-content">
            <p>{generatedScene.content}</p>
          </div>
          <button className="btn" onClick={() => alert('Scene saved to dashboard!')}>
            Save to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
