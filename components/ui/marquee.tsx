"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  repeat?: number
  duration?: number
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  strokeWidth?: string
  strokeColor?: string
  gradient?: boolean
}

const fontSizeClasses = {
  sm: "text-4xl sm:text-5xl md:text-6xl",
  md: "text-5xl sm:text-6xl md:text-7xl",
  lg: "text-6xl sm:text-7xl md:text-8xl",
  xl: "text-7xl sm:text-8xl md:text-[8rem]",
  "2xl": "text-8xl sm:text-[9rem] md:text-[10rem]",
  "3xl": "text-[9rem] sm:text-[10rem] md:text-[11rem]",
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({
    className,
    text,
    repeat = 4,
    duration = 20,
    fontSize = "lg",
    strokeWidth = "1.5px",
    strokeColor = "#00272B",
    gradient = false,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden py-10 bg-transparent select-none",
          className
        )}
        {...props}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ 
            x: ["0%", "-50%"]
          }}
          transition={{ 
            repeat: Number.POSITIVE_INFINITY, 
            ease: "linear", 
            duration,
          }}
        >
          {[...Array(repeat * 2)].map((_, index) => (
            <div key={index} className="flex items-center mx-4">
              <span
                className={cn(
                  fontSizeClasses[fontSize],
                  "font-heading font-black px-4 uppercase tracking-wider",
                  gradient 
                    ? "bg-gradient-to-r from-[#00272B] via-[#005B5C] to-[#E0FF4F] bg-clip-text text-transparent"
                    : "text-transparent"
                )}
                style={!gradient ? {
                  WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
                } : undefined}
              >
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    )
  }
)

Marquee.displayName = "Marquee"