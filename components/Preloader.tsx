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
        // Dynamic exit animation: Dramatic slide-up reveal
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: onComplete,
        });
      }
    });

    // Progress counter animation from 0 to 100
    const counterObj = { val: 0 };
    tl.to(counterObj, {
      val: 100,
      duration: 2.4,
      ease: 'power2.out',
      onUpdate: () => {
        setProgress(Math.floor(counterObj.val));
      }
    }, 0);

    // Draw the Organic circle path
    tl.to(circle, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    }, 0.2);

    // Draw the Tech square path
    tl.to(square, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    }, 0.5);

    // Fade in and rotate the dashed structural guide
    tl.to(dash, {
      strokeDashoffset: 0,
      opacity: 0.4,
      rotation: 0,
      duration: 1.0,
      ease: 'back.out(1.5)',
    }, 0.9);

    // Elastic pop for the core intersecting dot
    tl.to(dot, {
      scale: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.6)',
    }, 1.2);

    // Text letter spacing expand and fade-in
    tl.to(textRef.current, {
      opacity: 1,
      letterSpacing: '0.4em',
      y: 0,
      duration: 1.0,
      ease: 'power3.out',
    }, 1.3);

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#00272B] select-none overflow-hidden"
    >
      {/* Blueprint grid subtle background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
      {/* Decorative radial brand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E0FF4F]/5 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center z-10">
        
        {/* Core Animated Vector SVG Logo */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_10px_20px_rgba(224,255,79,0.05)]"
        >
          {/* Design: Organic flowing circle */}
          <circle
            ref={logoCircleRef}
            cx="42"
            cy="50"
            r="22"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
          />
          
          {/* Engineering: The sharp tech square */}
          <rect
            ref={logoSquareRef}
            x="44"
            y="36"
            width="28"
            height="28"
            rx="4"
            stroke="#E0FF4F"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          
          {/* Structure: Dash boundary */}
          <rect
            ref={logoDashRef}
            x="44"
            y="36"
            width="28"
            height="28"
            rx="4"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeDasharray="10 10"
          />
          
          {/* Intersection Core Dot */}
          <circle
            ref={logoDotRef}
            cx="50"
            cy="50"
            r="4.5"
            fill="#E0FF4F"
            stroke="#00272B"
            strokeWidth="2"
          />
        </svg>

        {/* Brand Name signature */}
        <div
          ref={textRef}
          style={{ opacity: 0, transform: 'translateY(15px)' }}
          className="mt-6 font-heading font-black text-base text-white tracking-[0.25em] uppercase flex items-center"
        >
          <span>RYTHAMO</span>
          <span className="text-[#E0FF4F] font-light ml-2">STUDIO</span>
        </div>

        {/* Incrementing percentage indicator */}
        <div className="mt-8 font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase flex items-center gap-2">
          <span>CREATING</span>
          <span className="text-white font-bold w-8 text-right text-[#E0FF4F]">
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
}
