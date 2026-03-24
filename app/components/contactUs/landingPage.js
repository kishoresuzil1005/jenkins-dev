import React from 'react';
import Link from 'next/link';
import { IoPeopleOutline, IoCalendarOutline, IoHelpCircleOutline, IoArrowForward } from 'react-icons/io5';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-secondary text-primary px-8 md:px-16 pt-24 md:pt-32 pb-8 md:pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">How can we help you?</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Card */}
          <div className="border border-primary/10 p-8 rounded-none hover:border-primary/30 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Sales</h3>
                <p className="text-primary/80 text-lg leading-relaxed">
                  Learn how our industry-leading Enterprise AI software products can help your organization.
                </p>
              </div>
              <div className="ml-4">
                <IoPeopleOutline size={48} className="text-primary" />
              </div>
            </div>
            <Link href="/contact-sales" className="w-full flex items-center justify-center text-primary hover:text-secondary transition-colors mt-8 border border-primary px-6 py-3 rounded-none hover:bg-primary">
              <span className="text-lg">Contact Sales</span>
              <IoArrowForward className="ml-2" size={20} />
            </Link>
          </div>

          {/* Join our AI course */}
          <div className="border border-primary/10 p-8  rounded-none hover:border-primary/30 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Join our AI course</h3>
                <p className="text-primary/80 text-lg leading-relaxed">
                  Contact us at <a href="https://cplc.codework.ai/" target="_blank" rel="noopener noreferrer" className="underline">cplc.codework.ai</a> to learn more about investing at CODEWORK.
                </p>
              </div>
              <div className="ml-4">
                <IoPeopleOutline size={48} className="text-primary" />
              </div>
            </div>
            <a href="https://cplc.codework.ai/courses" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center text-primary hover:text-secondary transition-colors mt-8 border border-primary px-6 py-3 rounded-none hover:bg-primary">
              <span className="text-lg">Join our AI course</span>
              <IoArrowForward className="ml-2" size={20} />
            </a>
          </div>

          {/* Schedule a Demo Card */}
          <div className="border border-primary/10 p-8 rounded-none hover:border-primary/30 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Schedule a Demo</h3>
                <p className="text-primary/80 text-lg leading-relaxed">
                  Discover how our AI solutions can be tailored to your enterprise needs.
                </p>
              </div>
              <div className="ml-4">
                <IoCalendarOutline size={48} className="text-primary" />
              </div>
            </div>
            <Link href="/schedule-a-demo" className="w-full flex items-center justify-center text-primary hover:text-secondary transition-colors mt-8 border border-primary px-6 py-3 rounded-none hover:bg-primary">
              <span className="text-lg">Schedule a Demo</span>
              <IoArrowForward className="ml-2" size={20} />
            </Link>
          </div>

          {/* Other Inquiries Card */}
          <div className="border border-primary/10 p-8 rounded-none hover:border-primary/30 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Other Inquiries</h3>
                <p className="text-primary/80 text-lg leading-relaxed">
                For any other questions, we’d be happy to help please contact us here.
                </p>
              </div>
              <div className="ml-4">
                <IoHelpCircleOutline size={48} className="text-primary" />
              </div>
            </div>
            <Link href="/other-inquiries" className="w-full flex items-center justify-center text-primary hover:text-secondary transition-colors mt-8 border border-primary px-6 py-3 rounded-none hover:bg-primary">
              <span className="text-lg">Request Information</span>
              <IoArrowForward className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
