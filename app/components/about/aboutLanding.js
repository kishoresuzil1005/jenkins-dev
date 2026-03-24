import React from 'react'

const AboutLanding = () => {
  return (
    <section className="bg-primary text-secondary relative overflow-hidden py-16 md:py-20 lg:py-24">
      

      

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-secondary text-sm font-medium">— About Codework —</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-secondary">
            <span className="text-secondary">Who We </span>
            <span className="text-secondary">
              Are
            </span>
          </h1>
          
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto"></div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Enhanced Text Card */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-secondary leading-tight">
                Shaping Tomorrow with <span className="text-secondary">AI-Powered</span> Technology
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="relative">
                  <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-secondary/90 pl-6 md:pl-8">
                    We are a <span className="text-secondary font-medium">technology-driven company</span> leveraging cutting-edge AI technology to transform businesses and drive success.
                  </p>
                </div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-secondary/80">
                  Our team combines <span className="text-secondary font-medium">advanced AI tools</span>, industry expertise, and a human-first approach to deliver results that matter.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-secondary/80">
                  From startups to enterprises, we partner with businesses to <span className="text-secondary font-medium">unlock their full potential</span> using AI and emerging technologies.
                </p>
              </div>

              {/* Enhanced Features List */}
              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-secondary/80 text-sm md:text-base">AI-Powered Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-secondary/80 text-sm md:text-base">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-secondary/80 text-sm md:text-base">Human-First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-secondary/80 text-sm md:text-base">Proven Results</span>
                </div>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
            
              
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 lg:p-8 hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/25">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] overflow-hidden ">
                  <img
                    src="/aboutLanding.svg"
                    alt="Codework team"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  )
}

export default AboutLanding
