'use client';

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  
  // Track selected tab. Since we have 4 tabs: Work, The Duo, Capabilities, Process
  const [selected, setSelected] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (selected !== null) {
      const selectedTab = tabsRef.current[selected];
      if (selectedTab) {
        const { width } = selectedTab.getBoundingClientRect();
        setPosition({
          left: selectedTab.offsetLeft,
          width,
          opacity: 1,
        });
      }
    }
  }, [selected]);

  const tabs = [
    { label: "Work", target: "#work" },
    { label: "The Duo", target: "#about" },
    { label: "Capabilities", target: "#capabilities" },
    { label: "Process", target: "#process" },
  ];

  return (
    <ul
      onMouseLeave={() => {
        // When mouse leaves, reset the hover cursor to hidden state.
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex items-center gap-1 bg-[#001D20]/40 p-1 rounded-xl border border-white/5"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.label}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          href={tab.target}
          onClick={() => setSelected(i)}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  href: string;
  onClick: () => void;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, href, onClick }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref || typeof ref === "function" || !ref.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white mix-blend-difference"
      >
        <a href={href} className="w-full h-full block">
          {children}
        </a>
      </li>
    );
  }
);

Tab.displayName = "Tab";

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-lg bg-[#E0FF4F]"
    />
  );
};