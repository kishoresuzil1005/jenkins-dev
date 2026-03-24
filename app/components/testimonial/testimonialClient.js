"use client";
import React, { useEffect, useMemo, useState } from "react";

const TestimonialClient = () => {
  const testimonials = useMemo(
    () => [
      {
        name: "Johnson R",
        role: "Delivery Manager – WebSignX Technologies",
        avatar: "/testimonial/webmainlogo.png",
        quote:
          "The Codework team demonstrated exceptional expertise by collaborating in developing our ticket booking application project. Their attention to detail, seamless integration of features, and commitment to meeting deadlines made this project a success. We are thoroughly impressed with their technical proficiency and look forward to future collaborations.",
      },
      {
        name: "Bikram Bakshi",
        role: "Entrepreneur & Tech Innovator",
        avatar: "/testimonial/cwmainlogo.png",
        quote:
          "It's rare to find partners who go above and beyond their scope of work. Your proactive thinking and self-initiative in providing insightful ideas have truly elevated our product to new heights. The innovative contributions you've made, coupled with your commitment to understanding our vision, have played a pivotal role in shaping the product into what it is today.",
      },
      {
        name: "Johnson R",
        role: "Entrepreneur & Tech Innovator",
        avatar: "/testimonial/Testimonials3.svg",
        quote:
          "We are extremely pleased with the Codework team's exceptional work in developing our website. Their technical expertise, attention to detail, and seamless execution exceeded our expectations. From design to functionality, they ensured that every aspect was well-integrated and user-friendly. Their commitment to meeting deadlines and delivering high-quality results made this project a great success. We look forward to collaborating with them again on future projects.",
      },
      {
        name: "Lovio Team",
        role: "Entrepreneur & Tech Innovator",
        avatar: "/testimonial/loviomainlogo.png",
        quote:
          "Partnering with CODEWORK has completely transformed the way we run our e-commerce dropshipping business. Their AI-powered automation solutions simplified our market research process and gave us valuable insights that used to take days to gather. The seamless sales platform integration they built has not only saved us time but also helped us scale with efficiency. With CODEWORK's expertise, we feel truly empowered to focus on growth while technology takes care of the complexities. A real game-changer for Lovio!",
      },
    ],
    []
  );
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCard = (t, position) => {
    const isReducedLogo =
      t.avatar === "/testimonial/cwmainlogo.png" ||
      t.avatar === "/testimonial/loviomainlogo.png";
    const isCenter = position === "center";
    
    // Responsive translate values
    const getTranslate = () => {
      if (position === "left") return "translate(-120%, 0)";
      if (position === "right") return "translate(20%, 0)";
      return "translate(-50%, 0)";
    };
    
    const scale = isCenter ? 1.12 : 0.88;
    const z = isCenter ? 30 : 20;
    const opacity = isCenter ? 1 : 0.7;
    const visibility = isCenter ? 'visible' : isMobile ? 'hidden' : 'visible';
    
    return (
      <div
        className="absolute left-1/2 top-0 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[65%] xl:w-[720px]"
        style={{
          transform: `${getTranslate()} scale(${scale})`,
          transition: "transform 600ms ease, opacity 600ms ease",
          zIndex: z,
          opacity,
          visibility,
        }}
      >
        <div className="relative ">
          <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full ring-2 sm:ring-4 ring-white shadow-xl overflow-hidden bg-white">
            <img
              src={t.avatar}
              alt={t.name}
              className={`w-full h-full object-contain ${isReducedLogo ? "p-2 sm:p-3" : "p-1.5 sm:p-2"}`}
            />
          </div>
          <div className="bg-white text-primary rounded-xl sm:rounded-2xl shadow-2xl border border-white/60 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="pt-6 sm:pt-8 md:pt-10 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{t.name}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">{t.role}</p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4 sm:mt-6 md:mt-8 italic text-center text-sm sm:text-base md:text-lg">
              {t.quote}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-primary text-secondary relative overflow-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-12 sm:space-y-16 md:space-y-20">
      {/* Header Section */}
      <div className="text-center mb-16 sm:mb-16 md:mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-8 md:mb-8 text-secondary">
          <span className="text-secondary">What Our </span>
          <span className="text-secondary">Clients Say</span>
        </h2>
        
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-7xl pt-24 sm:pt-24 md:pt-20 mx-auto h-[450px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[580px]">
        {renderCard(testimonials[(active - 1 + testimonials.length) % testimonials.length], "left")}
        {renderCard(testimonials[active], "center")}
        {renderCard(testimonials[(active + 1) % testimonials.length], "right")}
        
        {/* Navigation Controls */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
          <button
            aria-label="Previous testimonial"
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            className="bg-white/20 backdrop-blur-sm border border-white/40 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition text-lg sm:text-xl"
          >
            ‹
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
                  i === active ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="bg-white/20 backdrop-blur-sm border border-white/40 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition text-lg sm:text-xl"
          >
            ›
          </button>
        </div>
      </div>

      {/* Hidden Content */}
      <div className="hidden">
        {/* ... all your hidden content remains the same ... */}
      </div>

      {/* Bottom Decoration - Responsive */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        <div className="w-32 h-16 sm:w-48 sm:h-24 md:w-64 md:h-32 bg-gradient-to-l from-primary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialClient;
