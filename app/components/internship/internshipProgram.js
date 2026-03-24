'use client'
import React from 'react';
import { FaLaptopCode, FaNetworkWired, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';

const InternshipProgram = () => {
    return (
        <div className="relative bg-secondary overflow-hidden py-16 md:py-20 lg:py-24">
          
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 md:mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">CODEWORK</span>{" "}
                        <span className="text-primary">Internship Program</span>
                    </h1>

                    {/* Decorative underline */}
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-8"></div>

                    <p className="text-lg sm:text-xl md:text-2xl text-primary/90 font-light max-w-3xl mx-auto">
                        Building Skills, <span className="text-primary font-medium">Empowering Minds</span>, Shaping Careers.
                    </p>
                </div>

                {/* Key Features Section */}
                <section className="mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 text-center">
                        Key <span className="text-primary">Features</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="bg-secondary/20 backdrop-blur-xl border border-primary/10 rounded-2xl p-6 md:p-8 hover:bg-secondary/30 hover:border-primary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="mr-4 md:mr-6">
                                    <FaLaptopCode className="text-primary w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                                        Hands-on Experience
                                    </h3>
                                    <p className="text-primary/80 leading-relaxed">
                                        Engage in live projects and apply theoretical knowledge to practical scenarios, ensuring relevant 
                                        experience for your career.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/20 backdrop-blur-xl border border-primary/10 rounded-2xl p-6 md:p-8 hover:bg-secondary/30 hover:border-primary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="mr-4 md:mr-6">
                                    <FaHandsHelping className="text-primary w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                                        Mentorship
                                    </h3>
                                    <p className="text-primary/80 leading-relaxed">
                                        Benefit from guidance by highly qualified mentors dedicated to helping you develop your skills and 
                                        offering insights throughout the internship.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/20 backdrop-blur-xl border border-primary/10 rounded-2xl p-6 md:p-8 hover:bg-secondary/30 hover:border-primary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="mr-4 md:mr-6">
                                    <FaProjectDiagram className="text-primary w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                                        Skill Development
                                    </h3>
                                    <p className="text-primary/80 leading-relaxed">
                                        Enhance your technical and soft skills through practical application and expert guidance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/20 backdrop-blur-xl border border-primary/10 rounded-2xl p-6 md:p-8 hover:bg-secondary/30 hover:border-primary/30 transition-all duration-500 group">
                            <div className="flex items-start">
                                <div className="mr-4 md:mr-6">
                                    <FaNetworkWired className="text-primary w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                                        Networking
                                    </h3>
                                    <p className="text-primary/80 leading-relaxed">
                                        Build valuable connections with industry professionals and peers, opening doors for future 
                                        collaborations and career advancements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Outcomes Section */}
                <section className="mb-16 md:mb-20">
                    <div className="bg-secondary/20 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-10 lg:p-12 hover:bg-secondary/30 hover:border-primary/30 transition-all duration-500 relative">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                            Program <span className="text-primary">Outcomes</span>
                        </h2>
                        
                        <ul className="space-y-4 text-primary/90 leading-relaxed">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Develop proficiency in cutting-edge technologies and tools widely used in the industry.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Gain insights into project management methodologies and tools.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Work effectively in diverse teams, improving communication and collaboration skills.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Tackle real-world challenges with innovative and creative solutions.</span>
                            </li>
                        </ul>

                        {/* Bottom glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    </div>
                </section>

                {/* Eligibility Criteria Section */}
                <section className="mb-16 md:mb-20">
                    <div className="bg-secondary/20 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-10 lg:p-12 hover:bg-secondary/30 hover:border-primary/30 transition-all duration-500 relative">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                            Eligibility <span className="text-primary">Criteria</span>
                        </h2>
                        
                        <ul className="space-y-4 text-primary/90 leading-relaxed">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Students currently pursuing any degree in a relevant field.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Eligibility from the 2nd year of studies onwards or recent graduates within two years.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>A minimum cumulative GPA of 7.0.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span>Demonstrated interest in learning and acquiring new skills.</span>
                            </li>
                        </ul>

                        {/* Bottom glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    </div>
                </section>
            </div>

            {/* Enhanced Bottom Decoration */}
            <div className="absolute bottom-0 right-0 opacity-20">
                <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
            </div>
        </div>
    );
};

export default InternshipProgram;
