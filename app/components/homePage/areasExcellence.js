"use client";
import React from 'react';
import Link from "next/link";
import { 
  IoSettingsOutline,
  IoSparklesOutline,
  IoStatsChartOutline,
  IoChatbubbleEllipsesOutline,
  IoCubeOutline,
  IoShieldCheckmarkOutline,
  IoAnalyticsOutline,
  IoGitNetworkOutline,
  IoServerOutline,
} from 'react-icons/io5';

const AreasExcellence = () => {
  const expertiseAreas = [
    { icon: IoSettingsOutline, name: 'AI Consulting', link: '/ai-powered-pdf-translator' },              
    { icon: IoSparklesOutline, name: 'Generative AI', link: '/generative-ai' },   
    { icon: IoStatsChartOutline, name: 'Machine Learning', link: '/machine-learning' }, 
    { icon: IoChatbubbleEllipsesOutline, name: 'AI Chatbot Integration', link: '/algorithms-to-agents' },                  
    { icon: IoCubeOutline, name: 'Deep Learning', link: '/deep-learning' },  
    { icon: IoShieldCheckmarkOutline, name: 'AI in Cybersecurity', link: '/cybersecurity-service' }, 
    { icon: IoAnalyticsOutline, name: 'Predictive Analysis', link: '/tweaks-powerful-adaptations' },                                                                               
    { icon: IoGitNetworkOutline, name: 'Neural Networks', link: '/hype-hijack-goal' },  
    { icon: IoChatbubbleEllipsesOutline, name: 'NLP', link: '/revolutionizing-hiring' },  
    { icon: IoServerOutline, name: 'Data Engineering', link: '/model-context-protocol' },                                   
  ];

  

  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 relative bg-secondary overflow-hidden min-h-screen flex items-center text-primary">
        {/* Background Pattern Overlay */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full animate-blob"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-secondary/15 rounded-full animate-blob animation-delay-4000"></div>
        </div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="w-full">
  <div className="-mt-4">
    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-primary">
      <span className="bg-clip-text text-primary drop-shadow-lg text-primary">
        Areas of  <span className="text-primary">Expertise</span>
      </span>
      {/* Decorative underline */}
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-2"></div>
    </h2>
    <p className="text-lg sm:text-xl md:text-lg lg:text-lg xl:text-xl text-primary/90 leading-relaxed font-light tracking-wide mb-6">
      We bring <span className="text-primary font-medium">innovation to life</span> through 
    </p>
  </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {expertiseAreas.map((area, index) => (
              <Link href={area.link} key={index}>
                <div className="flex items-center h-[60px] sm:h-[72px] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
                  <div className="flex items-center justify-center w-[50px] sm:w-[65px] md:w-[65px] lg:w-[65px] xl:w-[65px] h-[50px] sm:h-[65px] md:h-[65px] lg:h-[65px] xl:h-[65px] mr-3 ml-2">
                    {(() => {
                      const Icon = area.icon;
                      return (
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform duration-300" aria-label={`${area.name} icon`} />
                      );
                    })()}
                  </div>
                  <span className="text-primary font-medium group-hover:text-primary transition-colors duration-300 flex-1">
                    {area.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-primary/80 mb-6">
            Our team is passionate about crafting intelligent solutions to help businesses grow,
            improve efficiency, and stay ahead in today's tech-driven world. Trust us to deliver
            excellence.
          </p>

          
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default AreasExcellence;
