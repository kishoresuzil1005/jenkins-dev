"use client";
import React from 'react';
import { 
  FaChartBar, 
  FaBolt, 
  FaCog, 
  FaGlobe, 
  FaRocket, 
  FaChartLine, 
  FaDollarSign, 
  FaTools,
  FaMoneyBillWave 
} from 'react-icons/fa';

const OurCompany = () => {
  return (
    <section className="bg-secondary text-primary py-16 px-4 relative overflow-hidden">


      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Intro + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-16">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full"></div>
              <p className="text-lg leading-relaxed text-primary/90 pl-6">
                With <span className="text-primary font-medium">Codework</span>, adopting technology means embracing innovation with a personal touch. 
                Commitment to excellence ensures that every project is delivered with 
                <span className="text-primary font-medium"> precision and care</span>, making us a trusted partner in the digital journey.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up animation-delay-200">
            <div className="relative">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/40 rounded-3xl blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 hover:transform hover:scale-105 transition-all duration-500 group">
                <img
                  className="w-full h-auto rounded-2xl group-hover:brightness-110 transition-all duration-500"
                  src="/CaseStudies/caseStudy.jpg"
                  alt="Team working on laptop"
                />
                
                {/* Floating Badge on Image */}
                <div className="absolute top-8 right-8 bg-secondary/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-primary font-bold text-sm">Excellence</span>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br-lg"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Challenges Section with React Icons */}
        <div className="mb-12 animate-slide-up animation-delay-400">
          <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-primary/40 hover:border-white/30 transition-all duration-500">
            <h2 className="text-2xl font-bold text-primary mb-6">
              <span className="text-primary">Challenges </span>
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">We Overcome</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Market Saturation", icon: FaChartBar },
                { title: "Technological Disruption", icon: FaBolt },
                { title: "Internal Operational Inefficiencies", icon: FaCog }
              ].map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                  >
                    <div className="text-primary text-3xl mb-3">
                      <IconComponent />
                    </div>
                    <h3 className="text-primary font-semibold transition-colors duration-300">
                      {challenge.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Strategic Response Section with React Icons */}
        <div className="mb-12 animate-slide-up animation-delay-600">
          <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-primary/40 hover:border-white/30 transition-all duration-500">
            <h2 className="text-2xl font-bold text-primary mb-6">
              <span className="text-primary">Strategic </span>
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">Response</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Market Diversification", icon: FaGlobe },
                { title: "Adopting Cutting-Edge Technology", icon: FaRocket },
                { title: "Operational Efficiency Improvements", icon: FaChartLine }
              ].map((response, index) => {
                const IconComponent = response.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                  >
                    <div className="text-primary text-3xl mb-3">
                      <IconComponent />
                    </div>
                    <h3 className="text-primary font-semibold transition-colors duration-300">
                      {response.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Results Section with React Icons */}
        <div className="animate-slide-up animation-delay-800">
          <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-primary/40 hover:border-white/30 transition-all duration-500">
            <h2 className="text-2xl font-bold text-primary mb-8">
              <span className="text-primary">Outstanding </span>
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">Results</span>
            </h2>

            <div className="space-y-8">
              {/* Market Share Result */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaChartLine className="text-secondary text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 transition-colors duration-300">
                      Increased Market Share
                    </h3>
                    <p className="text-primary/80 leading-relaxed">
                      The company regained and even expanded its market share by capturing new customer segments and entering new markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Revenue Growth Result */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMoneyBillWave className="text-secondary text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 transition-colors duration-300">
                      Revenue Growth
                    </h3>
                    <p className="text-primary/80 leading-relaxed">
                      Diversification and technological innovation resulted in a 
                      <span className="text-primary font-medium"> 35% increase</span> in annual revenue within six months.
                    </p>
                  </div>
                </div>
              </div>

              {/* Operational Excellence Result */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaTools className="text-secondary text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 transition-colors duration-300">
                      Operational Excellence
                    </h3>
                    <p className="text-primary/80 leading-relaxed mb-4">
                      Enhanced operational efficiencies translated into a 
                      <span className="text-primary font-medium"> 20% reduction</span> in operational costs and improved profit margins.
                    </p>
                    <div className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                      <p className="text-primary/90 leading-relaxed pl-6 font-light italic">
                        <span className="text-primary font-medium">Codework (P) Ltd.</span> turned big challenges into opportunities by staying flexible, 
                        thinking strategically, and using innovation. By accepting change and solving problems early, 
                        the company avoided setbacks and set itself up for <span className="text-primary font-medium">long-term success</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-slide-up animation-delay-1000">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group text-center">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">35%</div>
            <div className="text-primary/80 text-sm">Revenue Increase</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group text-center">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">20%</div>
            <div className="text-primary/80 text-sm">Cost Reduction</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group text-center">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">6 Months</div>
            <div className="text-primary/80 text-sm">Achievement Timeline</div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
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

export default OurCompany;
