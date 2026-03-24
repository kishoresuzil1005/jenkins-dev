"use client";
import React, { useState, useEffect } from "react";

const ProductLanding = () => {
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [productsDelivered, setProductsDelivered] = useState(0);
  const [supportAvailable, setSupportAvailable] = useState(0);

  useEffect(() => {
    const animateNumber = (target, setState, duration) => {
      const start = 0;
      const increment = target / (duration / 50); // Increment every 50ms
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setState(Math.floor(current));
      }, 50);

      return () => clearInterval(timer);
    };

    // Start animations for each stat
    animateNumber(100, setClientSatisfaction, 2500); // 2.5s duration
    animateNumber(50, setProductsDelivered, 2500);
    animateNumber(24, setSupportAvailable, 2500);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-secondary overflow-hidden pt-16">
     
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 ml-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">

            {/* Heading */}
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Our{" "}
              <span className="text-primary">
                Products
              </span>
            </h1>

            {/* Decorative underline */}
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto lg:mx-0"></div>

            {/* Description */}
            <div className="relative">
              <p className="text-lg sm:text-lg md:text-lg text-primary/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:pl-8 font-light">
                We transform real-world industry experience into{" "}
                <span className="font-semibold text-primary">software products</span> that add value
                and address our clients' key business problems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-left bg-secondary/5 backdrop-blur-sm rounded-2xl p-4 border border-primary/10 hover:bg-secondary/10 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary transition-all duration-300">
                  {clientSatisfaction}%
                </h3>
                <p className="text-xs sm:text-sm text-primary/70">Client Satisfaction</p>
              </div>
              <div className="text-center lg:text-left bg-secondary/5 backdrop-blur-sm rounded-2xl p-4 border border-primary/10 hover:bg-secondary/10 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary transition-all duration-300">
                  {productsDelivered}+
                </h3>
                <p className="text-xs sm:text-sm text-primary/70">Projects Delivered</p>
              </div>
              <div className="text-center lg:text-left bg-secondary/5 backdrop-blur-sm rounded-2xl p-4 border border-primary/10 hover:bg-secondary/10 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary transition-all duration-300">
                  {supportAvailable}/7
                </h3>
                <p className="text-xs sm:text-sm text-primary/70">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default ProductLanding;
