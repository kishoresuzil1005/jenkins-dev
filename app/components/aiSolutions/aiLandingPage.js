"use client";
import React from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const AiLandingPage = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-secondary text-primary overflow-hidden">
      {/* Background Container with enhanced overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/95 to-secondary/95"></div>
      </div>

      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
      </div> */}

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div> */}

      {/* Simplified Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 text-left">
        
        {/* Section Badge */}

        {/* Enhanced Heading Container */}
        <div className="heading-container mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-primary">
            <span className="text-primary">Empowering </span>
            <span className="text-primary">Innovation</span>
            <br />
            <span className="text-primary">with </span>
            <span className="text-primary">AI Technology</span>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-6"></div>
          </h1>
        </div>

        {/* Simplified Paragraph Container */}
        <div className="paragraph-container">
          <div className="relative">
            <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl leading-relaxed text-primary/90 font-light max-w-5xl">
              We deliver intelligent solutions powered by AI and advanced technologies. 
            </p>
          </div>
          {/* Left-aligned CTA */}
          <div className="mt-6 flex justify-start">
            <Link href="/our-company-case-studies" className="flex items-center text-primary hover:text-secondary transition-colors border border-primary px-5 py-3 rounded-none hover:bg-primary">
              <span className="text-sm sm:text-base md:text-lg">View Case Studies</span>
              <IoArrowForward className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      

      {/* CSS Animations */}
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
    </section>
  );
};

export default AiLandingPage;
