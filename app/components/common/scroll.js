"use client";
import React from 'react';

const AnimatedRows = () => {
  return (
    <>
      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .row {
          background-position: 0 0;
          background-size: cover;
          height: 70vh; /* Kept exactly as before */
          position: relative;
          overflow: hidden;
        }

        .text-holder {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0%;
          -webkit-clip-path: inset(0px 0px 0px 0px);
          clip-path: inset(0px 0px 0px 0px);
        }

        .text {
          transform: translateZ(0);
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          margin-top: 0;
          margin-bottom: 0;
          font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          font-size: 7vw;
          font-weight: 700;
          line-height: 1em;
          display: flex;
          position: fixed;
          inset: 0%;
          letter-spacing: -0.03em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        /* Responsive typography only */
        @media (max-width: 768px) {
          .text {
            font-size: 12vw;
          }
        }

        @media (max-width: 480px) {
          .text {
            font-size: 14vw;
          }
        }
      `}</style>
      
      <div className="row bg-secondary">
        <div className="text-holder">
          <div className="text bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent font-extrabold uppercase tracking-wide">Innovation</div>
        </div>
      </div>
      
      <div className="row bg-secondary">
        <div className="text-holder">
          <div className="text text-primary font-extrabold italic tracking-tight">Starts with a</div>
        </div>
      </div>
      
      <div className="row bg-secondary">
        <div className="text-holder">
          <div className="text bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent font-extrabold capitalize tracking-wide">Conversation</div>
        </div>
      </div>
    </>
  );
};

export default AnimatedRows;
