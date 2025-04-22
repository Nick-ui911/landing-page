import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Star, Sparkles } from 'lucide-react';

export default function ReasonsSection() {
  // State for hover highlights and special effects
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeHearts, setActiveHearts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Reasons with emoticons for visual interest
  const reasons = [
    { text: "The way your eyes crinkle when you smile", icon: "👁️", color: "bg-pink-100" },
    { text: "How you always know just what to say", icon: "💬", color: "bg-purple-100" },
    { text: "Your incredible strength and kindness", icon: "💪", color: "bg-red-100" },
    { text: "The sound of your laughter", icon: "🔊", color: "bg-yellow-100" },
    { text: "How you make ordinary moments magical", icon: "✨", color: "bg-indigo-100" },
    { text: "The way you care so deeply for others", icon: "💝", color: "bg-blue-100" },
    { text: "Your passion and determination", icon: "🔥", color: "bg-orange-100" },
    { text: "How you make me feel safe and loved", icon: "🏡", color: "bg-green-100" },
  ];

  // Function to generate random hearts when a card is hovered
  const addHeart = (index) => {
    if (activeHearts.length < 15) { // Limit hearts for performance
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 150 - 75,
        y: -80 - Math.random() * 100,
        size: 15 + Math.random() * 15,
        opacity: 0.7 + Math.random() * 0.3,
        rotation: Math.random() * 360,
        duration: 1 + Math.random() * 2,
        cardIndex: index
      };
      setActiveHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation completes
      setTimeout(() => {
        setActiveHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, newHeart.duration * 1000);
    }
  };

  // Start confetti animation when section is in view
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate confetti particles
  const confettiParticles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -20 - Math.random() * 100,
    size: 5 + Math.random() * 10,
    color: ['#ec4899', '#f472b6', '#db2777', '#be185d', '#9d174d'][Math.floor(Math.random() * 5)],
    rotation: Math.random() * 360,
    duration: 3 + Math.random() * 5
  }));

  // Special title animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.6,
        type: "spring", 
        stiffness: 100,
        damping: 8
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(219, 39, 119, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 15px -5px rgba(219, 39, 119, 0.4)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white opacity-50" />
      
      {/* Floating stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-pink-200"
            initial={{ opacity: 0.3, scale: 0.5 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.5, 0.8, 0.5],
              x: [0, Math.random() * 10 - 5, 0],
              y: [0, Math.random() * 10 - 5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          >
            <Star size={16} />
          </motion.div>
        ))}
      </div>
      
      {/* Falling confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {confettiParticles.map(particle => (
            <motion.div
              key={`confetti-${particle.id}`}
              className="absolute rounded-sm"
              style={{
                left: `${particle.x}%`,
                top: 0,
                width: `${particle.size}px`,
                height: `${particle.size * 1.5}px`,
                background: particle.color,
                zIndex: 1
              }}
              initial={{ 
                y: particle.y,
                rotate: 0,
                opacity: 0
              }}
              animate={{
                y: "120vh",
                rotate: particle.rotation,
                opacity: [0, 1, 1, 0.5, 0]
              }}
              transition={{
                duration: particle.duration,
                ease: "easeInOut",
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 5 + 5
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Animated title with individual letters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center mb-12"
        >
          {/* Gift box with bounce and shine effect */}
          <motion.div
            className="mb-4 relative"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -3, 3, 0],
              transition: { duration: 0.6 }
            }}
            viewport={{ once: true }}
          >
            <Gift size={48} className="text-pink-500" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
              style={{ filter: "blur(8px)" }}
            />
          </motion.div>
          
          <div className="flex items-center justify-center flex-wrap">
            {"Why I Love You".split('').map((letter, i) => (
              <motion.span
                key={`letter-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-semibold inline-block ${
                  letter === ' ' ? 'mr-3' : ''
                } ${i < 8 ? 'text-pink-600' : 'text-pink-500'}`}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Animated grid of reasons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className={`${reason.color} rounded-xl p-5 shadow-md relative overflow-hidden`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                // Generate hearts on click for mobile
                for (let i = 0; i < 5; i++) {
                  setTimeout(() => addHeart(idx), i * 100);
                }
              }}
              onMouseMove={() => {
                // Occasionally create hearts on hover
                if (Math.random() > 0.85) {
                  addHeart(idx);
                }
              }}
            >
              {/* Animated heart buttons that float away */}
              <AnimatePresence>
                {activeHearts.filter(heart => heart.cardIndex === idx).map(heart => (
                  <motion.div
                    key={heart.id}
                    className="absolute pointer-events-none"
                    style={{ 
                      bottom: "30%", 
                      left: "50%",
                      zIndex: 20
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: heart.opacity,
                      scale: 1,
                      x: heart.x,
                      y: heart.y,
                      rotate: heart.rotation
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: heart.duration,
                      ease: "easeOut"
                    }}
                  >
                    <Heart 
                      size={heart.size} 
                      className="text-pink-500" 
                      fill="#EC4899" 
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Spotlight effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                animate={{
                  opacity: hoveredIndex === idx ? 0.3 : 0,
                  backgroundPosition: hoveredIndex === idx ? ["0% 0%", "100% 100%"] : "0% 0%"
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />

              {/* Card content with icon and text */}
              <div className="flex items-start">
                <motion.div 
                  className="mr-3 text-2xl"
                  animate={{
                    scale: hoveredIndex === idx ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    repeat: hoveredIndex === idx ? Infinity : 0, 
                    repeatDelay: 1
                  }}
                >
                  {reason.icon}
                </motion.div>
                
                <motion.p 
                  className="text-lg text-gray-700 flex-1"
                  animate={{
                    color: hoveredIndex === idx ? "#be185d" : "#374151"
                  }}
                >
                  {reason.text}
                </motion.p>
                
                {/* Sparkle effect on hover */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      className="absolute right-3 top-3"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="text-pink-500" size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                  boxShadow: hoveredIndex === idx 
                    ? "inset 0 0 0 2px rgba(219, 39, 119, 0.6)" 
                    : "inset 0 0 0 1px rgba(219, 39, 119, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom decorative element */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1.5, 
            duration: 0.8, 
            type: "spring" 
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-pink-400 relative"
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              color: "#DB2777"
            }}
            transition={{ duration: 0.8 }}
          >
            <Heart size={32} fill="currentColor" />
            <motion.div
              className="absolute inset-0 bg-pink-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [1, 1.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              style={{ filter: "blur(8px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}