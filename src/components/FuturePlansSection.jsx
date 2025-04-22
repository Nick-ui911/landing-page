import { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Heart, Globe, Home, Sprout } from 'lucide-react';

const FuturePlansSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const plans = [
    {
      title: "Travel the World",
      icon: <Globe className="text-pink-600 w-12 h-12" />,
      text: "Exploring new places, creating memories in cities we've always dreamed of visiting",
      details: "From the streets of Paris to the beaches of Bali, we'll collect passport stamps and stories that will last a lifetime."
    },
    {
      title: "Build Our Home",
      icon: <Home className="text-pink-600 w-12 h-12" />,
      text: "Creating a space that's uniquely ours, filled with love and laughter",
      details: "A place where we can grow our family, host dinner parties, and create traditions that are uniquely ours."
    },
    {
      title: "Grow Together",
      icon: <Sprout className="text-pink-600 w-12 h-12" />,
      text: "Supporting each other's dreams and celebrating all of life's moments",
      details: "Through careers, hobbies, and personal growth, we'll be each other's biggest supporters and cheerleaders."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const titleTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        mass: 1 
      }
    }
  };

  const floatingHeartVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: [0, 1.2, 1], 
      opacity: [0, 1, 1],
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" 
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden relative">
      {/* Floating hearts background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: [null, "-50vh"],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5],
              rotateZ: [0, Math.random() * 180]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeInOut"
            }}
          >
            <Heart className="text-pink-200 w-8 h-8" />
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Header with animated elements */}
          <motion.div 
            variants={headerVariants}
            className="flex items-center justify-center mb-6"
          >
            <motion.div
              animate={pulseAnimation}
            >
              <Map size={40} className="text-pink-500 mr-4" />
            </motion.div>
            
            <motion.h2 
              variants={titleTextVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
            >
              Our Future Together
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mb-12"
          />
          
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-xl text-center text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              As we continue our journey together, here are some of the adventures 
              I dream of sharing with you:
            </motion.p>
            
            <motion.div
              variants={floatingHeartVariants}
              initial="initial"
              animate="animate"
              className="flex justify-center my-6"
            >
              <Heart fill="#ec4899" className="text-pink-500 w-12 h-12" />
            </motion.div>
          </motion.div>

          {/* Cards grid with enhanced interactions */}
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)",
                  backgroundColor: "#fff",
                  scale: 1.02
                }}
                className="bg-pink-50/80 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center transition-all duration-300 cursor-pointer"
                onClick={() => setActiveCard(activeCard === idx ? null : idx)}
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {plan.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-pink-600 mb-3">
                  {plan.title}
                </h3>
                
                <p className="text-gray-700 mb-4">{plan.text}</p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeCard === idx ? "auto" : 0,
                    opacity: activeCard === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-pink-200 mt-2">
                    <p className="text-gray-600 italic">{plan.details}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mt-4 text-pink-500 text-sm font-medium"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {activeCard === idx ? "Show less" : "Learn more"}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlansSection;