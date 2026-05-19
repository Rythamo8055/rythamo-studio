'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoCircleRef = useRef<SVGCircleElement>(null);
  const logoSquareRef = useRef<SVGRectElement>(null);
  const logoDashRef = useRef<SVGRectElement>(null);
  const logoDotRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Initial State Setups for Drawing Effects
    const circle = logoCircleRef.current;
    const square = logoSquareRef.current;
    const dash = logoDashRef.current;
    const dot = logoDotRef.current;

    if (!circle || !square || !dash || !dot) return;

    // Get exact length of vector paths for perfect stroke drawing
    const circleLength = circle.getTotalLength();
    const squareLength = square.getTotalLength();
    const dashLength = dash.getTotalLength();

    // Set stroke dash arrays and offsets
    gsap.set(circle, {
      strokeDasharray: circleLength,
      strokeDashoffset: circleLength,
    });
    gsap.set(square, {
      strokeDasharray: squareLength,
      strokeDashoffset: squareLength,
    });
    gsap.set(dash, {
      strokeDasharray: dashLength,
      strokeDashoffset: dashLength,
      opacity: 0,
      rotation: -15,
      transformOrigin: 'center',
    });
    gsap.set(dot, {
      scale: 0,
      transformOrigin: 'center',
    });

    // 2. Timeline Orchestration
    const tl = gsap.timeline({
      onComplete: () => {
        // Dynamic exit animation: Dramatic slide-up + fade reveal
        gsap.to(containerRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 1.0,
          ease: 'power4.inOut',
          onComplete: onComplete,
        });
      }
    });

    // Progress counter animation from 0 to 100
    const counterObj = { val: 0 };
    tl.to(counterObj, {
      val: 100,
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: () => {
        setProgress(Math.floor(counterObj.val));
      }
    }, 0);

    // Draw the Organic circle path
    tl.to(circle, {
      strokeDashoffset: 0,
      duration: 1.0,
      ease: 'power2.inOut',
    }, 0.2);

    // Draw the Tech square path
    tl.to(square, {
      strokeDashoffset: 0,
      duration: 1.0,
      ease: 'power2.inOut',
    }, 0.4);

    // Fade in and rotate the dashed structural guide
    tl.to(dash, {
      strokeDashoffset: 0,
      opacity: 0.3,
      rotation: 0,
      duration: 0.8,
      ease: 'back.out(1.5)',
    }, 0.8);

    // Elastic pop for the core intersecting dot
    tl.to(dot, {
      scale: 1,
      duration: 0.7,
      ease: 'elastic.out(1, 0.6)',
    }, 1.1);

    // Text letter spacing expand and fade-in
    tl.to(textRef.current, {
      opacity: 1,
      letterSpacing: '0.4em',
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, 1.2);

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#E0FF4F] select-none overflow-hidden"
    >
      <div className="relative flex flex-col items-center z-10">
        
        {/* Core Animated Vector SVG Logo (Midnight Forest outlines over Electric Neon Lime) */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Design: Organic flowing circle in Midnight Forest */}
          <circle
            ref={logoCircleRef}
            cx="42"
            cy="50"
            r="22"
            stroke="#00272B"
            strokeWidth="7"
            strokeLinecap="round"
          />
          
          {/* Engineering: The sharp tech square in Midnight Forest */}
          <rect
            ref={logoSquareRef}
            x="44"
            y="36"
            width="28"
            height="28"
            rx="4"
            stroke="#00272B"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          
          {/* Structure: Dash boundary in Midnight Forest */}
          <rect
            ref={logoDashRef}
            x="44"
            y="36"
            width="28"
            height="28"
            rx="4"
            stroke="#00272B"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeDasharray="12 12"
          />
          
          {/* Intersection Core Dot (White spotlight on dark structure) */}
          <circle
            ref={logoDotRef}
            cx="50"
            cy="50"
            r="4.5"
            fill="#FFFFFF"
            stroke="#00272B"
            strokeWidth="2"
          />
        </svg>

        {/* Brand Name signature */}
        <div
          ref={textRef}
          style={{ opacity: 0, transform: 'translateY(15px)' }}
          className="mt-6 font-heading font-black text-base text-[#00272B] tracking-[0.25em] uppercase flex items-center"
        >
          <span>RYTHAMO</span>
          <span className="text-[#00272B] font-light ml-2">STUDIO</span>
        </div>

        {/* Incrementing percentage indicator */}
        <div className="mt-8 font-mono text-[10px] text-[#00272B]/60 tracking-[0.3em] uppercase flex items-center gap-2">
          <span>CREATING</span>
          <span className="font-bold w-8 text-right text-[#00272B]">
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
}
