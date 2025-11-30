
import React, { useState, useEffect } from 'react';
import LoadingState from './VideoGenerator/LoadingState';
import VideoDisplay from './VideoGenerator/VideoDisplay';

interface VideoGeneratorProps {
  prompt: string;
  onCancel: () => void;
  videoUrl: string;
}

const VideoGenerator: React.FC<VideoGeneratorProps> = ({ prompt, onCancel, videoUrl }) => {
  const [progress, setProgress] = useState(0);

  // Progress simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!videoUrl) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return 70;
          return prev + 5;
        });
      }, 15000);
    } else {
      clearInterval(interval);
      setProgress(100);
    }
    return () => clearInterval(interval);
  }, [videoUrl]);

  const isLoading = !videoUrl;

  if (isLoading) {
    return (
      <LoadingState 
        prompt={prompt}
        progress={progress}
        onCancel={onCancel}
      />
    );
  }

  return (
    <VideoDisplay 
      prompt={prompt}
      videoUrl={videoUrl}
      onCancel={onCancel}
    />
  );
};

export default VideoGenerator;
