"use client";
import React from 'react';

const ItStaff = () => {
  const benefits = [
    {
      title: "Project Management",
      hoverText: "Oversees the entire software development lifecycle, ensuring timely delivery and seamless coordination between teams and stakeholders."
    },
    {
      title: "Strategic Planning",
      hoverText: "Aligns technology solutions with business objectives, ensuring IT investments directly support long-term goals."
    },
    {
      title: "Team Optimization",
      hoverText: "Builds and organizes high-performing IT teams tailored to client needs, enhancing collaboration and productivity."
    },
    {
      title: "Resource Allocation",
      hoverText: "Efficiently manages talent, tools, and infrastructure, distributing them across projects to maximize impact and minimize waste."
    },
  ];

  return (
    <div className="container mx-auto bg-secondary py-24 px-14 relative overflow-hidden">
      {/* Background animated particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-particles"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
        {/* Left side - Title and subtitle */}
        <div className="md:w-1/3">
          <h2 
            className="text-4xl font-bold text-primary mb-6 animate-fade-in-left"
          >
             Benefits of IT Staff Augmentation 
          </h2>
          <p className="text-primary text-lg leading-relaxed animate-fade-in-left-delay">
            Software companies leverage these services to streamline workflows, reduce development bottlenecks, and ensure that technical teams perform at their best. The primary objective is to create an environment where developers and engineers can focus on building robust, scalable solutions.
          </p>
        </div>
        
        {/* Right side - Benefits */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map(({ title, hoverText }, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 bg-secondary/70 text-primary transition-all duration-500 relative overflow-hidden group h-[120px] border border-secondary/20 cursor-pointer hover:scale-105 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-xl border border-secondary/30 group-hover:border-secondary/80 transition-all duration-500" />
              
              {/* Floating glow effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full">
                {/* Default title text */}
                <p className="font-bold text-lg group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0 text-primary drop-shadow-sm">
                  {title}
                </p>
                
                {/* Hover text */}
                <p className="font-medium text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 right-0 leading-relaxed">
                  {hoverText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        .animate-fade-in-left-delay {
          animation: fade-in-left 0.8s ease-out 0.2s both;
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default ItStaff;
