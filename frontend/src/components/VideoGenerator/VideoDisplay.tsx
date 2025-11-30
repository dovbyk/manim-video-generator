
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';

interface VideoDisplayProps {
  prompt: string;
  videoUrl: string;
  onCancel: () => void;
}

const VideoDisplay: React.FC<VideoDisplayProps> = ({ prompt, videoUrl, onCancel }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `animation-${Date.now()}.mp4`;
    link.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-fade-in">
      <div className="glass-effect rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-light gradient-text-heading mb-2">
            Generated Animation
          </h3>
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            "{prompt}"
          </p>
        </div>
        
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover rounded-b-2xl"
            />         
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={onCancel}
                className="border-white/20 text-white hover:bg-red-600 hover:border-red-600"
              >
                <X className="w-4 h-4 mr-2" />
                Delete
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-white text-black hover:bg-gray-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
