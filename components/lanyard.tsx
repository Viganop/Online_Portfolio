'use client';

import { motion } from 'motion/react';

interface LanyardProps {
  className?: string;
}

export function Lanyard({ className }: LanyardProps) {
  return (
    <div className={`${className} flex items-center justify-center p-8`}>
      <motion.div
        initial={{ opacity: 0, y: -50, rotateZ: 5 }}
        animate={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: 0.5 
        }}
        className="relative"
      >
        {/* Lanyard rope */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-1.5 h-32 bg-gradient-to-b from-primary via-primary to-primary/80 rounded-full" />
        
        {/* Badge card */}
        <motion.div
          animate={{ 
            rotateZ: [0, 2, -2, 1, -1, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="relative w-56 h-72 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 shadow-2xl shadow-primary/20 overflow-hidden"
        >
          {/* Inner card */}
          <div className="absolute inset-2 rounded-xl bg-background/95 p-4 flex flex-col">
            {/* Photo placeholder */}
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center">
              <span className="text-3xl font-black text-primary">LV</span>
            </div>
            
            {/* Name */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground leading-tight">Lucca Viganon</h3>
              <p className="text-xs text-muted-foreground mt-1">Periotto</p>
            </div>
            
            {/* Divider */}
            <div className="w-16 h-0.5 bg-primary/30 mx-auto my-4" />
            
            {/* Role */}
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Full-Stack Developer
              </span>
            </div>
            
            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-1 mt-4">
              {['React', 'Next.js', 'TypeScript'].map((skill) => (
                <span key={skill} className="px-2 py-0.5 rounded text-[10px] bg-card border border-border/50 text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </motion.div>
        
        {/* Badge clip */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-6 bg-zinc-400 rounded-sm shadow-md">
          <div className="absolute inset-1 bg-zinc-500 rounded-sm" />
        </div>
      </motion.div>
    </div>
  );
}
