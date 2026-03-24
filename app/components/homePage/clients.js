"use client";
import React from "react";

const Clients = () => {
  const clientLogos = [
    { name: "Hyperflex", logo: "/client/logo1.svg" },
    // { name: "INTULOGIC", logo: "/client/intulogic.svg" },
    { name: "Lovio", logo: "/client/logo3.svg" },
    // { name: "NALAM", logo: "/client/nalam.svg" },
    { name: "RadiInsight", logo: "/client/logo4.svg" },
    { name: "MTM", logo: "/client/logo5.svg" },
    { name: "STOREFRIES", logo: "/client/logo6.svg" },
    { name: "websign", logo: "/client/logo7.svg" },
    { name: "EXTRA5", logo: "/client/logo8.svg" },
    { name: "EXTRA2", logo: "/client/logo9.svg" },
    { name: "EXTRA3", logo: "/client/logo10.svg" },
    { name: "EXTRA4", logo: "/client/logo2.svg" },
    // { name: "EXTRA6", logo: "/client/logo11.svg" },
  ];

  

  return (
    <div className="relative min-h-[50vh] sm:min-h-[74vh] bg-primary flex items-end overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-secondary/15 rounded-full animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="w-full mx-auto text-center relative z-10">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap');`}</style>
        {/* Main client logos section */}
        <div className="bg-primary w-full min-h-[300px] sm:min-h-[400px] p-6 sm:p-10 md:p-12 lg:p-10 xl:p-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            
            {/* Main Heading with Enhanced Styling */}
            <h2 className="relative inline-block" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white bg-clip-text text-transparent leading-tight">
                Trusted by our Leading  <span className="text-secondary">Global Clients </span>
              </span>
              
              {/* Decorative Elements */}
              {/* <div className="absolute -top-2 -right-4 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div> */}
            </h2>

            {/* Subtitle */}
            <p className="text-white/80 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              We work with innovative companies and visionary teams to deliver a measurable, AI-driven impact.
            </p>
          </div>

          <div className="w-full mx-auto max-w-7xl relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center px-6 py-4">
              {clientLogos.map((client, idx) => (
                <div key={`${client.name}-${idx}`} className="flex items-center justify-center p-4 rounded-xl">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    style={{ maxWidth: '200px', maxHeight: '120px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Clients;
