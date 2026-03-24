"use client"
import React, { useState, useEffect } from 'react';
import { FiCpu } from 'react-icons/fi';
 

export default function LaunchPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M50 0 L50 50 M0 50 L200 50 M150 50 L150 100 M50 100 L150 100 M100 100 L100 150 M50 150 L150 150"
                      stroke="currentColor" className="text-secondary" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="4" fill="currentColor" className="text-secondary"/>
                <circle cx="150" cy="50" r="4" fill="currentColor" className="text-secondary"/>
                <circle cx="50" cy="150" r="4" fill="currentColor" className="text-secondary"/>
                <circle cx="150" cy="150" r="4" fill="currentColor" className="text-secondary"/>
                <circle cx="100" cy="100" r="4" fill="currentColor" className="text-secondary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-secondary opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-secondary opacity-5 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            top: '10%',
            left: '20%',
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-secondary opacity-5 blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            bottom: '10%',
            right: '20%',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-secondary opacity-10 blur-3xl"
          style={{
            top: '40%',
            left: '60%',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 py-24">
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-6 bg-primary/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-secondary/40 shadow-2xl shadow-secondary/30">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-secondary rounded-xl flex items-center justify-center relative overflow-hidden bg-primary">
                <FiCpu className="w-10 h-10 text-secondary" />
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-secondary" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-secondary" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-secondary" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-secondary" />
              </div>
              <div className="absolute inset-0 border-4 border-secondary rounded-xl animate-ping opacity-20" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-3">
                <span className="text-7xl md:text-8xl font-bold text-secondary">100</span>
                <span className="text-2xl md:text-3xl font-bold text-secondary">∞</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary tracking-wide">Automations</h3>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3 text-secondary">AI Automations</h1>
        <p className="text-secondary/80 text-center mb-6 max-w-2xl">A concise overview of our AI automation capabilities and platform architecture. Scroll within the viewer to explore.</p>
        <a
          href="/pdf/aiautomation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary text-primary font-semibold shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all hover:scale-105 border border-secondary mb-6"
        >
          Open Full Screen
        </a>
        <div className="w-full max-w-5xl h-[75vh] bg-primary border border-secondary/40 rounded-xl shadow-2xl shadow-secondary/20 overflow-hidden">
          <iframe src="/pdf/aiautomation.pdf#zoom=100" className="w-full h-full" />
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
    </div>
  );
}
