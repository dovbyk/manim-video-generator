import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import PromptBar from '@/components/PromptBar';
import WakeUp from '@/components/WakeUp';
import FeatureCard from '@/components/FeatureCard';
import UseCases from '@/components/UseCases';
import { Zap, Wand2, Cpu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);
  const [examplesRef, examplesVisible] = useScrollAnimation(0.1);
  const [useCasesRef, useCasesVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sans">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-11 w-11 text-white"
            />
          </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-base hover:text-gray-300 transition-colors duration-300 font-sans">
                Features
              </a>
              <a href="#examples" className="text-base hover:text-gray-300 transition-colors duration-300 font-sans">
                Examples
              </a>
              <a href="#usecases" className="text-base hover:text-gray-300 transition-colors duration-300 font-sans">
                Use Cases
              </a>
              <Button variant="outline" className="font-bold border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-sans">
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div 
          ref={heroRef} 
          className={`container mx-auto px-6 text-center fade-in-animation ${heroVisible ? 'visible' : ''}`}
        >
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl lg:text-7xl mb-8 gradient-text-heading" style={{ fontFamily: 'FK Grotesk Neue, sans-serif', fontWeight: 150 }}>
              Transform Words Into
              <br />
              <span>Stunning Animations</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
              Learn complex mathematical concepts through animations.   
              Simply describe what you envision, and watch as the AI  
              creates captivating animation with proper narration for your topic.
            </p>
            
            <div className="mb-16">
              <PromptBar />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <WakeUp />
              <Button variant="outline" size="lg" className="font-bold border-white/20 text-white hover:bg-white hover:text-black text-lg px-12 py-4 rounded-xl transition-all duration-300 font-sans">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div 
            ref={featuresRef}
            className={`text-center mb-16 fade-in-animation ${featuresVisible ? 'visible' : ''}`}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 gradient-text-heading" style={{ fontFamily: 'FK Grotesk Neue, sans-serif', fontWeight: 200 }}>
              Powered By Gemini 2.0 Flash
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
              Alleviate your learning with cutting-edge technology 
              that understands your vision and brings it to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`fade-in-animation ${featuresVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-white" />}
                title="Lightning Fast"
                description="Generate professional animations in seconds, not hours. Our optimized AI delivers results at unprecedented speed."
              />
            </div>
            <div className={`fade-in-animation ${featuresVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <FeatureCard
                icon={<Wand2 className="w-8 h-8 text-white" />}
                title="AI Magic"
                description="Advanced machine learning algorithms interpret your prompts with remarkable accuracy and creativity."
              />
            </div>
            <div className={`fade-in-animation ${featuresVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <FeatureCard
                icon={<Cpu className="w-8 h-8 text-white" />}
                title="Smart Narration"
                description="Intelligent scene composition, dynamic camera movements, and realistic physics simulation powered by AI."
              />
            </div>
            <div className={`fade-in-animation ${featuresVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
              <FeatureCard
                icon={<Sparkles className="w-8 h-8 text-white" />}
                title="Endless Creativity"
                description="From abstract concepts to detailed scenarios, our AI adapts to any creative vision you can imagine."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div 
            ref={examplesRef}
            className={`text-center mb-16 fade-in-animation ${examplesVisible ? 'visible' : ''}`}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 gradient-text-heading" style={{ fontFamily: 'FK Grotesk Neue, sans-serif', fontWeight: 200 }}>
              Sample Animations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
              Explore the limitless possibilities. These examples showcase what's possible 
              when you combine human creativity with AI precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gradient Descent",
                description: "Visualize and explain the Gradient Descent Algorithm with proper diagram ",
                file: "/videos/GradientDescent.mp4"
              },
              {
                title: "Linear Regression",
                description: "Visualize and explain the concept of Linear Regression in machine learning",
                file: "/videos/LinearRegression.mp4"
              },
              {
                title: "Logistic Regression",
                description: "Explain the basic concept of Logistic Regression in Classification algorithms",
                file: "/videos/LogisticRegressionExplanation.mp4"
              },
              {
                title: "Asymptotic Notations",
                description: "Explain the concept of Asymptotic Notations for analyzing algorithmic complexities in Computer Science ",
                file: "/videos/AsymptoticNotations.mp4"
              },
              {
                title: "Support Vector Machines",
                description: "What are support vector machines, explain through a beautiful animation",
                file: "/videos/SupportVectorMachines.mp4"
              },
              {
                title: "Concept of Integration",
                description: "Explain the general meaning of Integration of any function through a visual animation",
                file: "/videos/IntegrationConcept.mp4"
              }
            ].map((video, index) => (
              <div 
                key={index}
                className={`fade-in-animation ${examplesVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="rounded-xl overflow-hidden shadow-lg bg-black">
                  <video 
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                    poster={`/thumbnails/${video.file.split('/').pop().replace('.mp4', '.jpg')}`}
                  >
                    <source src={video.file} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div 
            ref={useCasesRef}
            className={`text-center mb-16 fade-in-animation ${useCasesVisible ? 'visible' : ''}`}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 gradient-text-heading" style={{ fontFamily: 'FK Grotesk Neue, sans-serif', fontWeight: 200 }}>
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
              Discover how our AI animation platform transforms the conventional learning into 
              a much more engaging visual learning and the possibilities are endless.
            </p>
          </div>
          
          <UseCases isVisible={useCasesVisible} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6 text-center">
          <div 
            ref={ctaRef}
            className={`glass-effect rounded-3xl p-12 lg:p-20 max-w-4xl mx-auto fade-in-animation ${ctaVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl lg:text-6xl mb-6 gradient-text-heading" style={{ fontFamily: 'FK Grotesk Neue, sans-serif', fontWeight: 200 }}>
              Disclaimer
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-sans">
              The video generation process may take around 4-5 mins or less depending upon the network and backend capabilities.
              But the wait is worth while!
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-xl px-16 py-6 rounded-xl transition-all duration-300 hover:scale-105 font-sans">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl gradient-text-heading mb-4 md:mb-0" style={{ fontFamily: 'FK Grotesk Neue, sans-serif', fontWeight: 200 }}>
              PromptToAnimation
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-sans">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-sans">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-sans">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 font-sans">
              © 2024 PromptToAnimation. All rights reserved. Powered by advanced AI technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
