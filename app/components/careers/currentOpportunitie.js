"use client";
import React from "react";
import Link from "next/link";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const CurrentOpportunities = () => {
  const jobOpenings = [
    {
      title: "Senior .Net Developer",
      experience: "Minimum 4 years",
      workMode: "Onsite",
      type: "Full-time"
    },
    {
      title: "Senior UI Developer",
      experience: "Minimum 3 years",
      workMode: "Onsite",
      type: "Full-time"
    },
    {
      title: "Quality Analyst",
      experience: "Minimum 2 years",
      workMode: "Onsite",
      type: "Full-time"
    },
    {
      title: "Senior Front-end Developer (React JS)",
      experience: "Minimum 5+ Years",
      workMode: "Hybrid",
      type: "Full-time"
    },
    {
      title: "Senior API Developer (.Net)",
      experience: "Minimum 7+ Years",
      workMode: "Hybrid",
      type: "Full-time"
    },
    {
      title: "Jr. Software Tester (Certified)",
      experience: "Minimum 1 year",
      workMode: "Onsite",
      type: "Full-time"
    },
    {
      title: "AI Consultant",
      experience: "Minimum 3 years",
      workMode: "Onsite",
      type: "Full-time"
    },
    {
      title: "Lead Engineer - Full Stack",
      experience: "Minimum 4 years",
      workMode: "Hybrid",
      type: "Full-time"
    },
    
    {
      title: "UI UX Designer",
      experience: "Minimum 3 Years",
      workMode: "Hybrid",
      type: "Full-time"
    },
    {
      title: "Marketing Intern",
      experience: "Fresher",
      workMode: "Onsite",
      type: "Full-time"
    }
  ];

  return (
    <section className="relative w-full min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-primary text-secondary overflow-hidden">
    

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header - Fully Responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
            <span className="text-secondary">Current </span>
            <span className="text-secondary">
              Opportunities
            </span>
          </h2>
          
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-secondary/90 font-light max-w-3xl mx-auto px-2">
            Join our team and be part of something <span className="text-secondary font-medium">extraordinary</span>
          </p>
        </div>

        {/* Job Openings Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {jobOpenings.map((job, index) => (
            <div 
              key={index} 
              className="group bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 hover:bg-primary/40 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/25 relative"
            >
              {/* Job Type Badge - Responsive */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-primary/90 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow-lg">
                <span className="text-secondary font-bold text-xs">{job.type}</span>
              </div>

              {/* Job Title - Responsive */}
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6 transition-colors duration-300 leading-tight pr-8">
                {job.title}
              </h3>

              {/* Job Details - Responsive */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center text-secondary/80">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <FaCalendarAlt className="text-secondary text-xs sm:text-sm" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base">{job.experience}</span>
                </div>
                
                <div className="flex items-center text-secondary/80">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <FaMapMarkerAlt className="text-secondary text-xs sm:text-sm" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base">Work Mode: {job.workMode}</span>
                </div>

                <div className="flex items-center text-secondary/80">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <FaBriefcase className="text-secondary text-xs sm:text-sm" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base">{job.type} Position</span>
                </div>
              </div>

              {/* Apply Button - Outline Style, Reduced Size */}
              <Link href="/join-our-team">
                <button className="inline-flex w-full justify-center items-center px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-primary backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm font-medium group/btn">
                  <span>Apply Now</span>
                  <FaArrowRight className="w-3 h-3 ml-1 sm:ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>

              {/* Card bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section - Fully Responsive */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-1 sm:mb-2">{jobOpenings.length}</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Open Positions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-1 sm:mb-2">Fast</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Hiring Process</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-1 sm:mb-2">Remote</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Work Options</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-1 sm:mb-2">Growth</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Opportunities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration - Responsive */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-16 h-8 sm:w-32 sm:h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default CurrentOpportunities;
