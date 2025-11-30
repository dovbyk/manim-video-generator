
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Sparkles } from 'lucide-react';
import VideoGenerator from './VideoGenerator';

const PromptBar = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    console.log('Generating animation for:', prompt);
    setGeneratedPrompt(prompt);
    setIsGenerating(true);
    setVideoUrl(null); 


    try {
    const response = await fetch('https://test-cd0n.onrender.com/generate', {
      method: 'POST',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    
    const contentType = response.headers.get("Content-Type");
    console.log("Status:", response.status);
    console.log("Content-Type:", contentType);
      
    console.log("Response is received ig");
    if (!response.ok) throw new Error('Failed to generate video');
    console.log("Response is ok and is sent by the backend");
    const blob = await response.blob();
    const videoObjectUrl = URL.createObjectURL(blob);

    setVideoUrl(videoObjectUrl); // Pass this down
  } catch (error) {
    console.error('Error generating video:', error);
    alert('Something went wrong!');
    setIsGenerating(false);
  }
};

  const handleCancel = () => {
    setIsGenerating(false);
    setGeneratedPrompt('');
    setPrompt('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <form onSubmit={handleSubmit} className="relative group">
          <div className="relative glass-effect rounded-2xl p-2 transition-all duration-300 group-hover:bg-white/10">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Eg. Explain the Gradient Descent Algorithm in ML"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-transparent border-none text-lg placeholder:text-gray-400 focus:outline-none focus:ring-0 px-6 py-4"
                  style={{ fontFamily: 'FK Grotesk, sans-serif' }}
                  disabled={isGenerating}
                />
                <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 animate-pulse-slow" />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-bold text-lg px-8 py-4 rounded-xl group-hover:scale-105"
                disabled={!prompt.trim() || isGenerating}
                style={{ fontFamily: 'FK Grotesk, sans-serif' }}
              >
                {isGenerating ? 'Generating...' : 'Generate'}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'FK Grotesk, sans-serif' }}>
            Start with simple descriptions for best results • AI-powered animation generation
          </p>
        </div>
      </div>
      
      {/* Video Generator Component */}
      {isGenerating && (
        <VideoGenerator 
          prompt={generatedPrompt}
          onCancel={handleCancel}
          videoUrl={videoUrl}
        />
      )}
    </div>
  );
};

export default PromptBar;
