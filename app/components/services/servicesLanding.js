"use client";
import React from "react";
import Link from "next/link";

const ServiceLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-secondary text-primary overflow-hidden">

      {/* Enhanced Content Container */}
      <div className="relative z-10 w-[95%] md:w-[92%] mx-auto px-4 mt-16 sm:mt-16 lg:mt-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Enhanced Content with Reduced Text */}
        <div className="w-full md:w-4/5 lg:w-3/4 text-left space-y-6">
          {/* Enhanced Heading */}
          <div className="heading-container">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold w-full max-w-none text-primary">
              <span className="text-primary">Driving Innovation Through AI Services</span>
                         </h1>
            
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-4"></div>
          </div>

          {/* Reduced Paragraph Content */}
          <div className="paragraph-container space-y-6">
            <div className="relative">
              <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-primary/90 pl-6 font-light">
                We offer <span className=" font-medium">cutting-edge AI services</span> that empower businesses with 
                <span className=" font-medium"> tailored, efficient, and accurate</span> solutions.
              </p>
            </div>
            
            <div className="relative pl-6">
              <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-primary/90 font-light">
                <Link
                  href="/our-company-case-studies"
                  className="text-primary hover:text-primary/80 underline font-medium transition-colors duration-300 relative group"
                >
                  Discover our success stories
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {" "}in business development through AI.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Enhanced CSS Animations */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ServiceLanding;
