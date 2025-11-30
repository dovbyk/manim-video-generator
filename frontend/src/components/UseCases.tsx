
import React from 'react';
import { GraduationCap, BookOpen, Users, Presentation, Video, Brain } from 'lucide-react';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description, index, isVisible }) => {
  return (
    <div 
      className={`relative flex items-start gap-6 animate-on-scroll ${isVisible ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 500}ms` }}
    >
      {/* Thread line */}
      <div className="relative flex flex-col items-center">
        {/* Icon circle */}
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-110">
          {icon}
        </div>
        
        {/* Connecting line */}
        {index < 5 && (
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-white/10 mt-4"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-16">
        <h3 className="font-heading font-light text-2xl mb-3 text-white">
          {title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed font-sans">
          {description}
        </p>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
    </div>
  );
};

interface UseCasesProps {
  isVisible: boolean;
}

const UseCases: React.FC<UseCasesProps> = ({ isVisible }) => {
  const useCases = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Educational Content Creation",
      description: "Transform complex concepts into engaging visual animations for students. Perfect for creating educational videos, interactive lessons, and explaining difficult topics."
    },
    {
      icon: <Presentation className="w-8 h-8 text-white" />,
      title: "Professional Presentations",
      description: "Enhance your business presentations with stunning animated sequences. Make data visualization, process flows, and corporate storytelling more compelling."
    },
    {
      icon: <Video className="w-8 h-8 text-white" />,
      title: "Marketing & Social Media",
      description: "Create eye-catching promotional content for social platforms. Generate animated explainer videos, product demonstrations, and brand storytelling content."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Course Development",
      description: "Build comprehensive online courses with animated illustrations. Perfect for e-learning platforms, training modules, and instructional design."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Team Collaboration",
      description: "Facilitate better communication within teams through visual storytelling. Create animated workflows, process documentation, and project presentations."
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Research & Academia",
      description: "Visualize research findings, scientific processes, and academic concepts. Make complex theories accessible through animated explanations."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-0">
        {useCases.map((useCase, index) => (
          <UseCase
            key={index}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
