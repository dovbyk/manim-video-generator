
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { X } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { phrases, TYPE_SPEED, PHRASE_PAUSE, FADE_DURATION } from './constants/phrases';

interface LoadingStateProps {
  prompt: string;
  progress: number;
  onCancel: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({ prompt, progress, onCancel }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const phraseTimeout = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Character-wise typewriter effect with fade animations
  useEffect(() => {
    if (isComplete) return; // Don't cycle if complete
    
    setDisplayed('');
    setIsVisible(true);
    let i = 0;

    function typeNext() {
      if (i <= phrases[phraseIndex].length) {
        setDisplayed(phrases[phraseIndex].slice(0, i));
        i++;
        typingTimeout.current = setTimeout(typeNext, TYPE_SPEED);
      } else {
        // Check if this is the last phrase
        if (phraseIndex === phrases.length - 1) {
          setIsComplete(true);
          return;
        }
        
        // Start fade out after typing is complete
        fadeTimeout.current = setTimeout(() => {
          setIsVisible(false);
          // After fade out, wait and move to next phrase
          setTimeout(() => {
            setPhraseIndex((prev) => prev + 1);
          }, FADE_DURATION);
        }, PHRASE_PAUSE);
      }
    }
    typeNext();
    
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      if (phraseTimeout.current) clearTimeout(phraseTimeout.current);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, [phraseIndex, isComplete]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-fade-in">
      <div className="glass-effect rounded-2xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-light gradient-text-heading mb-2">
            Generating Your Animation
          </h3>
          <p className="text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            "{prompt}"
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <LoadingSpinner />
          </div>
          
          <Progress value={progress} className="w-full h-3" />
          
          <div className="flex justify-between text-xl text-gray-400">
            <span 
              className="animate-pulse-slow"
              style={{ 
                minWidth: "300px", 
                fontFamily: "Space Grotesk, sans-serif", 
                letterSpacing: 1,
                opacity: isVisible ? 1 : 0,
                transition: `opacity ${FADE_DURATION}ms ease-in-out`,
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
                animation: 'pulse-slow 2s ease-in-out infinite'
              }}
            >
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            <span>{progress}%</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            onClick={onCancel}
            className="border-white/20 text-white hover:bg-white hover:text-black"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel Generation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
