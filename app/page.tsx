'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Cubes from '../components/Cubes/Cubes';
import MagnetLines from '../components/MagnetLines/MagnetLines';
import { Marquee } from '../components/ui/marquee';

export default function PremiumFreelanceLandingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [aboutScrollProgress, setAboutScrollProgress] = useState(0);
  
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Contact Section Scroll Expansion
      if (contactContainerRef.current) {
        const rect = contactContainerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const start = viewportHeight * 0.85;
        const end = 50; 
        
        const distance = start - rect.top;
        const total = start - end;
        const progress = Math.min(Math.max(distance / total, 0), 1);
        
        setScrollProgress(progress);
      }

      // 2. About/Duo Section Scroll Expansion
      if (aboutContainerRef.current) {
        const rect = aboutContainerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const start = viewportHeight * 0.85;
        const end = 50; 
        
        const distance = start - rect.top;
        const total = start - end;
        const progress = Math.min(Math.max(distance / total, 0), 1);
        
        setAboutScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    // Initial triggering
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const caseStudies = [
    {
      id: 'health-metro',
      title: 'Health Metro',
      category: 'development',
      tag: 'HEALTHCARE / OPTIMIZATION',
      headline: 'A 100% Core Web Vitals healthcare landing page & admin system built for rapid patient acquisition.',
      metric: '0.4s Load Time',
      bgClass: 'bg-[#00272B]/5 text-[#00272B]',
      tagClass: 'text-[#00272B]/75',
    },
    {
      id: 'flowart',
      title: 'FlowArt Engine',
      category: 'design',
      tag: 'KINETIC MOTION / ENGINE',
      headline: 'A custom, hardware-accelerated GSAP presentation engine for premium storytelling layouts.',
      metric: '60 FPS Transitions',
      bgClass: 'bg-[#E0FF4F]/10 text-[#00272B]',
      tagClass: 'text-[#00272B]/85 font-bold',
    },
    {
      id: 'swiss-portfolio',
      title: 'Swiss Curator',
      category: 'branding',
      tag: 'EDITORIAL BRANDING',
      headline: 'A premium, grid-driven art gallery and portfolio showcase for high-end European agencies.',
      metric: 'Perfect 100 Lighthouse',
      bgClass: 'bg-[#00272B] text-white',
      tagClass: 'text-[#E0FF4F]',
    }
  ];

  const filteredStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeTab);

  return (
    <div className="relative min-h-screen bg-white text-[#00272B] selection:bg-[#E0FF4F] selection:text-[#00272B] overflow-x-hidden font-sans">
      
      {/* 1. UPGRADED MODULAR AWWWARDS-STYLE NAV BAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-2xl p-1.5 bg-[#00272B]/95 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-[0_20px_50px_rgba(0,39,43,0.15)] transition-all duration-300">
        
        {/* Left Side: Modular Branding Box */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 bg-[#001D20]/80 hover:bg-[#001517] px-4 py-2.5 rounded-xl border border-white/5 transition-all duration-300"
        >
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image 
              src="/logo.svg" 
              alt="Rythamo Studio Logo" 
              width={24} 
              height={24} 
              className="object-contain animate-pulse"
            />
          </div>
          <span className="tracking-tight font-black uppercase text-sm leading-none flex items-center">
            <span className="text-[#E0FF4F]">Rythamo</span>
            <span className="text-white font-light ml-1.5 opacity-90">Studio</span>
          </span>
        </a>
        
        {/* Middle: Modular Capsule Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest font-bold">
          <a 
            href="#work" 
            className="px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/10 hover:text-[#E0FF4F] transition-all duration-300"
          >
            Work
          </a>
          <a 
            href="#about" 
            className="px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/10 hover:text-[#E0FF4F] transition-all duration-300"
          >
            The Duo
          </a>
          <a 
            href="#capabilities" 
            className="px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/10 hover:text-[#E0FF4F] transition-all duration-300"
          >
            Capabilities
          </a>
          <a 
            href="#process" 
            className="px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/10 hover:text-[#E0FF4F] transition-all duration-300"
          >
            Process
          </a>
        </nav>
        
        {/* Right Side: High-Impact Neon Lime CTA */}
        <a 
          href="#contact" 
          className="px-5 py-2.5 rounded-xl bg-[#E0FF4F] text-[#00272B] hover:bg-white hover:scale-[1.02] transition-all duration-300 font-mono text-xs uppercase tracking-wider font-extrabold shadow-lg"
        >
          Start A Project
        </a>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative min-h-screen w-full flex items-center pt-32 md:pt-40 pb-20 px-6 md:px-[6vw] overflow-hidden">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            <span className="inline-flex items-center font-mono text-xs uppercase tracking-[0.25em] text-[#00272B]/70 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#E0FF4F] mr-2" />
              [ Design Meets Engineering ]
            </span>
            <h1 className="text-[clamp(2.5rem,6.5vw,5.2rem)] font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
              We Craft <br />
              <span className="relative z-10 px-4 py-2 mt-2 text-[#00272B] bg-[#E0FF4F] rounded-2xl inline-block">
                Digital Landmarks.
              </span>
            </h1>
            <p className="text-lg md:text-xl font-normal leading-relaxed text-[#00272B]/85 max-w-[50ch]">
              Rythamo Studio is an elite, dual-core agency delivering bespoke web systems that fuse jaw-dropping visual art with microsecond code execution. We build to win.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full bg-[#00272B] text-white text-center font-mono text-xs uppercase tracking-wider font-bold shadow-lg hover:bg-[#E0FF4F] hover:text-[#00272B] hover:scale-105 transition-all duration-300"
              >
                Start A Project
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 rounded-full border border-[#00272B]/20 text-center font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#00272B]/5 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center">
            <div className="relative w-full h-full max-w-[450px] lg:max-w-none rounded-[2.5rem] overflow-hidden bg-transparent">
              <Image 
                src="/hero_sculpture.png" 
                alt="Rythamo Studio 3D sculpture representation"
                fill
                priority
                className="object-cover rounded-[2.2rem]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. CASE STUDIES SECTION */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-[6vw] bg-white border-t border-[#00272B]/10">
        <div className="w-full max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00272B]/60 font-semibold">[ RECENT CREATIONS ]</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight">
                Case <span className="italic text-[#00272B]/70 underline decoration-[#E0FF4F] decoration-4 underline-offset-8">Studies.</span>
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider font-semibold border-b border-[#00272B]/10 pb-2">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${activeTab === 'all' ? 'bg-[#00272B] text-white' : 'text-[#00272B]/60 hover:text-[#005B5C]'}`}
              >
                All Work
              </button>
              <button 
                onClick={() => setActiveTab('design')} 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${activeTab === 'design' ? 'bg-[#00272B] text-white' : 'text-[#00272B]/60 hover:text-[#005B5C]'}`}
              >
                Design
              </button>
              <button 
                onClick={() => setActiveTab('development')} 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${activeTab === 'development' ? 'bg-[#00272B] text-white' : 'text-[#00272B]/60 hover:text-[#005B5C]'}`}
              >
                Development
              </button>
              <button 
                onClick={() => setActiveTab('branding')} 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${activeTab === 'branding' ? 'bg-[#00272B] text-white' : 'text-[#00272B]/60 hover:text-[#005B5C]'}`}
              >
                Branding
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div 
                key={study.id} 
                className={`flex flex-col justify-between p-8 rounded-3xl ${study.bgClass} hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,39,43,0.04)] transition-all duration-500`}
              >
                <div>
                  <span className={`font-mono text-[10px] tracking-[0.25em] font-bold ${study.tagClass}`}>
                    {study.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-extrabold uppercase mt-4 mb-6 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-85 mb-8 font-medium font-sans">
                    {study.headline}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[#00272B]/10 pt-6">
                  <span className="font-mono text-xs font-bold">{study.metric}</span>
                  <span className="w-8 h-8 rounded-full border border-[#00272B]/20 flex items-center justify-center font-extrabold text-xs hover:bg-[#00272B] hover:text-white transition-colors cursor-pointer">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE DUO SECTION (DYNAMIC SCROLL-DRIVEN EXPANSION) */}
      <section 
        ref={aboutContainerRef}
        id="about" 
        className="relative py-20 bg-white overflow-hidden flex justify-center items-center"
      >
        <div 
          style={{
            width: `${90 + (aboutScrollProgress * 10)}%`,
            maxWidth: aboutScrollProgress >= 0.98 ? '100%' : `${1024 + (aboutScrollProgress * 500)}px`,
            borderRadius: `${Math.max(0, (1 - aboutScrollProgress) * 48)}px`,
          }}
          className="bg-[#00272B] text-white shadow-2xl relative overflow-hidden transition-all duration-200 ease-out py-24 md:py-32 px-8 md:px-[6vw]"
        >
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative w-full aspect-square flex justify-center">
              <div className="relative w-full h-full max-w-[420px] lg:max-w-none rounded-[2.5rem] overflow-hidden bg-transparent">
                <Image 
                  src="/duo_sketch.png" 
                  alt="Rythamo Studio creative & engineering duo illustration"
                  fill
                  className="object-cover rounded-[2.2rem]"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E0FF4F] font-bold">
                [ THE DUAL CORE DUO ]
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white leading-none">
                Two Minds.<br />
                One <span className="italic text-white underline decoration-[#E0FF4F] decoration-4 underline-offset-8">Vision.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white/80">
                We operate as a high-trust boutique partnership. By eliminating project managers, salespeople, and administrative layers, we write a straight line between the idea in your head and the code on the screen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-4">
                <div className="flex flex-col gap-2.5">
                  <span className="inline-flex self-start px-3 py-1 rounded-full bg-[#E0FF4F] text-[#00272B] font-mono text-[9px] tracking-[0.15em] font-black uppercase">
                    01 / CREATIVE DIRECTION
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold uppercase text-white">Vishnu (Rythamo)</h3>
                  <p className="text-xs leading-relaxed text-white/70 max-w-[34ch]">
                    Visual architect. Curating typography, structural spacing, custom colors, and kinetic scroll mechanics that feel elegant and memorable.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="inline-flex self-start px-3 py-1 rounded-full bg-[#E0FF4F] text-[#00272B] font-mono text-[9px] tracking-[0.15em] font-black uppercase">
                    02 / TECHNICAL DEVELOPMENT
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold uppercase text-white">Rahul</h3>
                  <p className="text-xs leading-relaxed text-white/70 max-w-[34ch]">
                    Frontend engineer. Hardening lightweight React structures, secure deployment scripts, dynamic databases, and speed-optimized layouts.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES SECTION */}
      <section id="capabilities" className="py-24 md:py-32 px-6 md:px-[6vw] bg-white border-t border-[#00272B]/10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00272B]/60 font-semibold">
              [ DEPLOYMENT & METRICS ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight">
              Elite <span className="underline decoration-[#E0FF4F] decoration-4 underline-offset-8 italic">Capabilities.</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div className="flex gap-4 md:gap-6 border-b border-[#00272B]/10 pb-6">
                <span className="font-mono text-xs text-[#00272B]/40 font-bold pt-1">01</span>
                <div>
                  <h3 className="text-lg font-heading font-bold uppercase mb-1">Warm Minimalism</h3>
                  <p className="text-sm leading-relaxed text-[#00272B]/80">
                    We steer clear of standard template looks. By combining typography-led structures with warm, tailored organic colors, your brand stands out as premium and high-end.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 md:gap-6 border-b border-[#00272B]/10 pb-6">
                <span className="font-mono text-xs text-[#00272B]/40 font-bold pt-1">02</span>
                <div>
                  <h3 className="text-lg font-heading font-bold uppercase mb-1">Zero-Bloat Engineering</h3>
                  <p className="text-sm leading-relaxed text-[#00272B]/80">
                    Hand-written React layers using high-performance compiler tools. Zero heavy third-party plugins. Smooth, hardware-accelerated animations using GSAP and Lenis engine integrations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <span className="font-mono text-xs text-[#00272B]/40 font-bold pt-1">03</span>
                <div>
                  <h3 className="text-lg font-heading font-bold uppercase mb-1">Perfect Audit Standards</h3>
                  <p className="text-sm leading-relaxed text-[#00272B]/80">
                    Lighthouse metrics strictly hitting 100% across performance, SEO, accessibility, and best practices. Your page loads instantly, ranks seamlessly on Google, and converts leads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center">
            <div className="relative w-full h-full max-w-[450px] lg:max-w-none rounded-[2.5rem] overflow-hidden p-6 bg-[#00272B] flex items-center justify-center">
              <Cubes 
                gridSize={8}
                maxAngle={45}
                radius={3}
                borderStyle="1px solid rgba(224, 255, 79, 0.25)"
                faceColor="#00272B"
                rippleColor="#E0FF4F"
                rippleSpeed={1.5}
                autoAnimate
                rippleOnClick
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. THE PROCESS SECTION */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-[6vw] bg-white border-t border-[#00272B]/10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center">
            <div className="relative w-full h-full max-w-[450px] lg:max-w-none rounded-[2.5rem] overflow-hidden p-8 bg-[#00272B] flex items-center justify-center">
              <MagnetLines
                rows={8}
                columns={8}
                containerSize="100%"
                lineColor="#E0FF4F"
                lineWidth="4px"
                lineHeight="26px"
                baseAngle={-15}
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00272B]/60 font-semibold">
              [ AGILE ROADMAP ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight">
              Bespoke <span className="italic text-[#00272B]/70 underline decoration-[#E0FF4F] decoration-4 underline-offset-8">Process.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-[#00272B]/10 pt-8 mt-4">
              <div className="flex flex-col gap-3">
                <span className="text-3xl font-heading font-black text-[#00272B]/15">01</span>
                <h3 className="text-base font-heading font-bold uppercase">Discovery & Strategy</h3>
                <p className="text-xs leading-relaxed text-[#00272B]/80">
                  Aligning on targets, customer profiles, brand assets, and structural grids to define a precise creative strategy.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-3xl font-heading font-black text-[#00272B]/15">02</span>
                <h3 className="text-base font-heading font-bold uppercase">Tactile Creation</h3>
                <p className="text-xs leading-relaxed text-[#00272B]/80">
                  Translating prototypes to lightweight React code with continuous staging links and feedback iterations.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-3xl font-heading font-black text-[#00272B]/15">03</span>
                <h3 className="text-base font-heading font-bold uppercase">Launch & Audit</h3>
                <p className="text-xs leading-relaxed text-[#00272B]/80">
                  Performing intense Lighthouse audits, mapping domains, configuring SEO details, and verifying fast servers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CONTACT / CTA SECTION */}
      <section 
        ref={contactContainerRef}
        id="contact" 
        className="relative py-24 bg-white overflow-hidden flex justify-center items-center"
      >
        <div 
          style={{
            width: `${90 + (scrollProgress * 10)}%`,
            maxWidth: scrollProgress >= 0.98 ? '100%' : `${1024 + (scrollProgress * 500)}px`,
            borderRadius: `${Math.max(0, (1 - scrollProgress) * 48)}px`,
          }}
          className="bg-[#00272B] text-white shadow-2xl relative overflow-hidden transition-all duration-200 ease-out py-20 md:py-32 px-8 md:px-16"
        >
          {/* Subtle background abstract circle */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E0FF4F]/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8 max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E0FF4F] font-semibold">
              [ COLLABORATION & INQUIRIES ]
            </span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-heading font-extrabold uppercase leading-[1.05] tracking-tight text-white">
              Let&apos;s build a <br />
              <span className="text-[#E0FF4F]">Digital Landmark.</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-white/85 max-w-[48ch]">
              We only take on 2 projects at a time to ensure undivided focus and elite execution quality. Reach out today to claim your timeline slot.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <a 
                href="mailto:mailforservices8055@gmail.com"
                className="px-8 py-4 rounded-full bg-[#E0FF4F] text-[#00272B] hover:bg-white hover:text-[#00272B] hover:scale-105 transition-all duration-300 font-mono text-xs uppercase tracking-wider font-bold shadow-lg"
              >
                mailforservices8055@gmail.com
              </a>
              <span className="text-xs font-mono text-white/60">or click to copy</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-16 bg-white border-t border-[#00272B]/10 text-xs text-[#00272B]/60 font-mono">
        {/* Full-width Rolling Brand Marquee with smooth brand gradient */}
        <div className="w-full border-b border-[#00272B]/5 pb-8 mb-12">
          <Marquee 
            text="RYTHAMO STUDIO • DESIGN MEETS ENGINEERING •"
            fontSize="2xl"
            gradient={true}
            duration={25}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#00272B]/5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo.svg" 
                  alt="Rythamo Studio Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#00272B] tracking-tight uppercase leading-none">RYTHAMO STUDIO.</h3>
                <span className="text-[10px] tracking-widest text-[#00272B]/60 uppercase font-semibold">DESIGN MEETS ENGINEERING</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 uppercase text-[10px] font-bold tracking-widest">
              <a href="#work" className="hover:text-[#005B5C] transition-colors duration-300">Work</a>
              <a href="#about" className="hover:text-[#005B5C] transition-colors duration-300">The Duo</a>
              <a href="#capabilities" className="hover:text-[#005B5C] transition-colors duration-300">Capabilities</a>
              <a href="#process" className="hover:text-[#005B5C] transition-colors duration-300">Process</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p>© {new Date().getFullYear()} RYTHAMO STUDIO. ALL RIGHTS RESERVED.</p>
            <p className="flex items-center gap-1.5 uppercase font-bold tracking-wider text-[#00272B]/75">
              BUILT WITH SWISS PRECISION <span className="w-2 h-2 rounded-full bg-[#E0FF4F] border border-[#00272B]/20" /> AND NEXT.JS
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
