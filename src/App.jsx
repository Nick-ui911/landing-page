// src/App.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Calendar,
  MessageCircleHeart,
  Gift,
  Map,
  Camera,
  CheckSquare,
  ChevronDown,
} from "lucide-react";
import confetti from "canvas-confetti";
import Swal from "sweetalert2";

import PhotoAlbum from "./components/PhotoAlbum";
import ReasonsSection from "./components/ReasonsSection";
import FuturePlansSection from "./components/FuturePlansSection";

// Bucket list items to do together
const bucketListItems = [
  {
    title: "Travel to Paris",
    description:
      "Walk along the Seine, visit the Eiffel Tower, and enjoy croissants at a café",
    icon: "✈️",
  },
  {
    title: "Go Paragliding Together",
    description:
      "Soar through the skies side by side and feel the wind of freedom and love!",
    icon: "🪂",
  },
  {
    title: "Go Stargazing",
    description:
      "Find a quiet spot away from the city and count shooting stars",
    icon: "✨",
  },
  {
    title: "Plant a Garden",
    description: "Grow flowers and vegetables together and watch them bloom",
    icon: "🌱",
  },
  {
    title: "Cook Together (Chef Me, Student You 😄)",
    description:
      "I'll teach you all my kitchen secrets — from spicy dishes to sweet desserts, with love as the main ingredient.",
    icon: "👨‍🍳",
  },
  {
    title: "Road Trip Adventure",
    description:
      "Pack the car and hit the open road with no destination in mind",
    icon: "🚗",
  },
];

export default function App() {
  const [showLoveNote, setShowLoveNote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoveredBucketItem, setHoveredBucketItem] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Click For a Surprise");

  const handleButtonClick = () => {
    Swal.fire({
      title: "Yay! 💖",
      text: "Our magical journey begins now ✨🌸",
      imageUrl: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: "Aww 🥹",
      confirmButtonColor: "#e91e63",
      background: "#fff0f5",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://i.gifer.com/7efs.gif")
        left top
        no-repeat
      `,
    });
  };

  const loveQuotes = [
    "Every moment with you feels like magic.",
    "You're the missing piece I never knew I needed.",
    "My favorite place in the world is next to you.",
    "Loving you is as natural as breathing.",
  ];

  const messages = [
    "You're my sunshine ☀️",
    "Made for each other 💞",
    "Forever yours 💖",
    "Click for more love 💘",
  ];

  useEffect(() => {
    if (clicked) {
      const glow = document.body.animate(
        [{ backgroundColor: "#fff0f6" }, { backgroundColor: "#ffffff" }],
        { duration: 700 }
      );
      glow.onfinish = () => setClicked(false);
    }
  }, [clicked]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 text-center font-sans text-gray-800">
      {/* Floating Hearts Animation (always visible) */}
      <div className="fixed w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}vh`,
                animation: `float ${
                  4 + Math.random() * 2
                }s ease-in-out infinite`,
              }}
            >
              {["💖", "💕", "🌸", "💫"][i % 4]}
            </span>
          ))}
        </motion.div>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl text-pink-400 opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: -100,
              rotate: Math.random() * 360,
              transition: {
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 20,
              },
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <section className="min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          {/* Background pattern */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl text-pink-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              ❤️
            </div>
          ))}
        </motion.div>

        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heart
            size={64}
            className="text-pink-600 mx-auto mb-6"
            fill="#ec4899"
          />
        </motion.div>

        <motion.h1
          className="text-6xl font-bold text-pink-600 mb-4 z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          To the Love of My Life
        </motion.h1>

        <motion.p
          className="text-xl max-w-2xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          This page is my little love letter to you — a collection of memories,
          surprises, and everything that makes us *us*. Every part of it is just
          my way of saying how much I adore you.
        </motion.p>

        {/* Improved Click for Surprise Button */}
        {/* Improved Click for Surprise Button */}
        <motion.div
          className="mt-12 z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.button
            onClick={() => {
              // Vibrate
              if (navigator.vibrate) navigator.vibrate(200);

              // Play heartbeat sound
              const audio = new Audio("/heartbeat.mp3");
              audio.play().catch((e) => console.log("Autoplay prevented:", e));

              // Emoji Confetti
              const emojis = ["💖", "💘", "💫", "🥰", "🌸"];
              emojis.forEach((emoji) => {
                confetti({
                  particleCount: 20,
                  spread: 100,
                  origin: { y: 0.6 },
                  scalar: 1.2,
                  ticks: 200,
                  shapes: ["text"],
                  text: emoji,
                });
              });

              // Pulse animation
              setClicked(true);

              // Reveal love note
              setShowLoveNote(true);

              // Scroll to next section
              const el = document.getElementById("next-surprise");
              if (el) {
                setTimeout(() => {
                  el.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }

              // Change button text randomly
              const newText =
                messages[Math.floor(Math.random() * messages.length)];
              setButtonText(newText);
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 mb-6 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-2">{buttonText}</span>
              <Heart size={20} className="inline-block" fill="#ffffff" />
            </span>

            {/* Click Glow Pulse */}
            {clicked && (
              <motion.span
                className="absolute inset-0 rounded-full bg-white opacity-20"
                initial={{ scale: 0.5, opacity: 0.6 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
          </motion.button>

          <motion.p
            className="text-sm mt-3 text-pink-600 opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            A little magic awaits...
          </motion.p>

          {showLoveNote && (
            <motion.div
              className="mt-2 mb-20 p-6 bg-white border border-pink-200 rounded-2xl shadow-xl text-center max-w-lg mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                A Little Love Note 💌
              </h3>
              <p className="text-gray-700">
                You're the reason behind my smile every day. I can't wait to
                create a million memories with you. 💖
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Animated quote carousel */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 mx-auto max-w-xl px-6 py-4 bg-white bg-opacity-80 rounded-lg shadow-md z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              className="text-lg italic text-pink-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              "{loveQuotes[currentQuote]}"
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bucket List Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background animation elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.05,
            background:
              "radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 70%)",
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center mb-12"
          >
            <motion.div
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <CheckSquare size={32} className="text-pink-500 mr-3" />
            </motion.div>
            <motion.h2
              className="text-4xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              Our Bucket List
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{
                color: ["#374151", "#ec4899", "#374151"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Adventures we'll experience, memories we'll create, and dreams
              we'll chase together.
            </motion.span>
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bucketListItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-pink-50 to-white rounded-xl overflow-hidden shadow-md relative"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 15px 30px -5px rgba(236, 72, 153, 0.3), 0 10px 15px -10px rgba(236, 72, 153, 0.2)",
                  y: -5,
                }}
                initial={{ opacity: 0, y: 50, rotateY: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: idx * 0.15,
                }}
                viewport={{ once: true, margin: "-50px" }}
                onHoverStart={() => setHoveredBucketItem(idx)}
                onHoverEnd={() => setHoveredBucketItem(null)}
              >
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 to-purple-100 opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.5,
                  }}
                />

                <div className="p-6">
                  <motion.span
                    className="text-4xl mb-4 block"
                    animate={{
                      y: [0, -10, 0],
                      rotateZ: hoveredBucketItem === idx ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2,
                      },
                      rotateZ: {
                        duration: 0.5,
                        repeat: hoveredBucketItem === idx ? 1 : 0,
                      },
                    }}
                  >
                    {item.icon}
                  </motion.span>

                  <motion.h3
                    className="text-xl font-bold text-pink-600 mb-3"
                    animate={{
                      color: hoveredBucketItem === idx ? "#db2777" : "#ec4899",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-700"
                    animate={{
                      opacity: hoveredBucketItem === idx ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400"
                  initial={{ width: "0%" }}
                  animate={{
                    width: hoveredBucketItem === idx ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 opacity-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredBucketItem === idx ? 0.05 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            className="mt-12 mx-auto block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg relative overflow-hidden"
            onClick={handleButtonClick}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 15px 30px -5px rgba(236, 72, 153, 0.4), 0 8px 10px -6px rgba(236, 72, 153, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8,
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ x: "100%", opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="relative z-10"
              whileHover={{
                textShadow: "0 0 8px rgba(255,255,255,0.5)",
              }}
            >
              Let's Start Our Adventure Together
            </motion.span>
          </motion.button>

          {/* Floating animated elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute w-12 h-12 rounded-full bg-pink-100 opacity-20"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [0, -100, 0],
                x: i % 2 === 0 ? [0, 50, 0] : [0, -50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </section>
      {/* Enhanced Photo Album Section with Mobile Optimizations */}
      <PhotoAlbum />

      {/* Love Letter */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-pink-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPositionX: ["0%", "100%"],
            backgroundPositionY: ["0%", "100%"],
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 25L37.5 37.5L25 25L37.5 12.5L50 25ZM62.5 37.5L50 50L62.5 62.5L75 50L62.5 37.5ZM25 75L37.5 62.5L50 75L37.5 87.5L25 75ZM12.5 37.5L25 50L12.5 62.5L0 50L12.5 37.5ZM50 75L62.5 62.5L75 75L62.5 87.5L50 75ZM87.5 37.5L75 50L87.5 62.5L100 50L87.5 37.5ZM50 25L62.5 37.5L75 25L62.5 12.5L50 25Z' fill='%23ec4899'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 text-center sm:text-left"
          >
            <MessageCircleHeart
              size={28}
              className="text-pink-500 mb-2 sm:mb-0 sm:mr-3"
            />
            <h2 className="text-3xl sm:text-4xl font-semibold text-pink-500">
              A Letter From My Heart
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowLoveNote(!showLoveNote)}
              className="bg-white rounded-xl shadow-xl p-4 sm:p-6 w-full text-left cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 border-pink-200 relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(219, 39, 119, 0.25)",
                borderColor: "rgb(244, 114, 182)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M10 2C8.34 2 7 3.34 7 5c0 1.3.84 2.4 2 2.82V9c0 .55.45 1 1 1s1-.45 1-1V7.82c1.16-.42 2-1.52 2-2.82 0-1.66-1.34-3-3-3z" fill="%23db2777" /></svg>\')',
                    backgroundSize: "30px 30px",
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", "30px 30px"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Header with animated envelope - Improved for mobile */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center relative z-10">
                <div className="flex items-center mb-4 sm:mb-0">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-pink-600"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-pink-600 font-serif">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      My Love Letter to You
                      <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="inline-block ml-2"
                      >
                        💌
                      </motion.span>
                    </motion.span>
                  </h3>
                </div>
                <motion.span
                  className="text-pink-500 px-3 sm:px-4 py-1 rounded-full border border-pink-200 text-sm font-medium self-start sm:self-auto"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(249, 168, 212, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showLoveNote ? "Close Letter" : "Open Letter"}
                  <motion.span
                    animate={{
                      rotate: showLoveNote ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="inline-block ml-1"
                  >
                    ↓
                  </motion.span>
                </motion.span>
              </div>

              {/* Letter content */}
              <AnimatePresence>
                {showLoveNote && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="mt-6 pt-6 border-t border-pink-100 relative font-serif"
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    >
                      {/* Improved text animation that preserves proper spacing */}
                      <motion.p
                        className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 italic"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        My dearest love,
                      </motion.p>

                      <motion.p
                        className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        Every day with you is a dream I never want to end. Your
                        smile lights up my world, your voice calms my soul, and
                        your heart is the home I never knew I needed. The way
                        you laugh at my worst jokes, how you know exactly what
                        I'm thinking without me saying a word, and the feeling
                        of your hand in mine - these are the moments I treasure
                        most.
                      </motion.p>

                      <motion.p
                        className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        This journey with you is the most beautiful adventure,
                        and I want you to know that every step we take together
                        makes my heart fuller. You've shown me what it means to
                        love completely and be loved in return. You're my best
                        friend, my confidant, my partner in all things.
                      </motion.p>

                      <motion.p
                        className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      >
                        I promise to stand by you, to lift you up when you need
                        strength, to celebrate your victories as my own, and to
                        face whatever challenges come our way together. My love
                        for you grows deeper with each passing day.
                      </motion.p>

                      <motion.p
                        className="text-base sm:text-lg leading-relaxed text-gray-700 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      >
                        Forever yours,
                        <br />
                        <motion.span
                          className="font-bold text-pink-600 text-lg sm:text-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6 }}
                        >
                          Nikhil
                        </motion.span>
                      </motion.p>

                      {/* Line underline effect */}
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                      />

                      {/* Floating hearts animation - Reduced quantity for mobile */}
                      <div className="absolute right-0 bottom-0">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-pink-500 opacity-80"
                            initial={{
                              y: 0,
                              x: 0,
                              opacity: 0,
                              scale: 0.5 + Math.random() * 0.5,
                            }}
                            animate={{
                              y: -60 - Math.random() * 60,
                              x: -10 + Math.random() * 20,
                              opacity: [0, 0.8, 0],
                              scale: [0.5, 0.8 + Math.random() * 0.4, 0.5],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 3 + Math.random() * 2,
                              delay: 1 + i * 0.5,
                              repeatDelay: Math.random() * 2,
                            }}
                            style={{
                              bottom: `${10 + i * 20}px`,
                              right: `${10 + i * 15}px`,
                            }}
                          >
                            ❤️
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Decorative elements around the letter */}
            <motion.div
              className="absolute -z-10 w-full h-full top-3 sm:top-5 left-2 sm:left-5 rounded-xl border-2 border-pink-100 opacity-70"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute -z-10 w-8 sm:w-12 h-8 sm:h-12 -top-2 -right-1 sm:-right-2 text-xl sm:text-2xl"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reasons Section */}
      <ReasonsSection />

      {/* Future Plans Section */}
      <FuturePlansSection />

      {/* Closing Section */}
      <section className="py-24 bg-gradient-to-t from-pink-200 to-pink-50 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Parallax background hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`bg-heart-${i}`}
              className="absolute opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                transition: {
                  duration: Math.random() * 20 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <span className="text-5xl text-pink-300">❤️</span>
            </motion.div>
          ))}
        </div>

        {/* Animated heart confetti */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 2,
                  scale: 0,
                }}
                animate={{
                  x:
                    window.innerWidth / 2 +
                    (Math.random() - 0.5) * window.innerWidth,
                  y: -100,
                  scale: Math.random() * 2 + 0.5,
                  rotate: Math.random() * 360,
                  transition: {
                    duration: 2 + Math.random() * 3,
                    ease: "easeOut",
                  },
                }}
              >
                <span className="text-4xl">
                  {
                    ["❤️", "💖", "💘", "💕", "💓", "💝"][
                      Math.floor(Math.random() * 6)
                    ]
                  }
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Decorative top swirl */}
        <motion.div
          className="absolute top-0 left-0 w-full h-16 opacity-30 pointer-events-none"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAiPjxwYXRoIGQ9Ik0wLDEwIHE1LC03IDEwLDAgdDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDAgLDEwLDApIHN0cm9rZT0iI2ZiN2ViNyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4=')] bg-repeat-x"></div>
        </motion.div>

        {/* Main title with text reveal effect */}
        <div className="relative mb-8">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Forever Yours
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-pink-300 to-red-300 rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Subtle sparkle effects */}
          {showConfetti &&
            [...Array(5)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                initial={{
                  x: i * 40 - 80 + Math.random() * 20,
                  y: -20 + Math.random() * 40,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  transition: {
                    duration: 1.5,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3 + 2,
                  },
                }}
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            ))}
        </div>

        {/* Wax seal effect with improved animation */}
        <motion.div
          className="absolute top-2 right-2 sm:top-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-600 shadow-lg flex items-center justify-center z-20"
          style={{ opacity: showLoveNote ? 0 : 0.9 }}
          initial={{ scale: 0, rotate: -45 }}
          animate={{
            scale: showLoveNote ? 0 : 1,
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px -5px rgba(249, 168, 212, 0.5)",
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white font-serif text-base sm:text-lg font-bold"
          >
            N
          </motion.div>
        </motion.div>

        {/* Message with character-by-character reveal */}
        <div className="relative max-w-xl text-center px-4 mb-12">
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {Array.from(
              "Thank you for being the most amazing person in my life. My heart is yours, today and always."
            ).map((char, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.02 * idx }}
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Heartbeat effect */}
          <motion.div
            className="absolute -z-10 inset-0 bg-pink-100 rounded-lg opacity-20"
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* Interactive beating heart */}
        <motion.div
          className="relative mb-12 cursor-pointer"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          onClick={() => {
            setShowConfetti(true);
            // Assuming you can add this function to your component
            const audio = new Audio("/heartbeat.mp3");
            audio.play().catch((e) => console.log("Auto-play prevented"));
          }}
          whileHover={{ scale: 1.1 }}
          animate={{
            scale: [1, 1.1, 1],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <span className="text-7xl filter drop-shadow-lg">💖</span>

          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-pink-400"
            animate={{
              scale: [1, 1.5],
              opacity: [0.8, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              },
            }}
          />

          {/* Tooltip */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm text-pink-600 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Click me!
          </motion.div>
        </motion.div>

        {/* Final message with signature and animated reveal */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="italic text-pink-700 mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            With all my love,
          </motion.p>

          <motion.p
            className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500 font-script"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
          >
            Your Lover
          </motion.p>

          {/* Signature underline */}
          <motion.div
            className="h-0.5 w-32 bg-gradient-to-r from-transparent via-pink-400 to-transparent mt-1"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "8rem" }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Floating elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute pointer-events-none opacity-30"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 3 + i,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              },
            }}
          >
            <span className="text-4xl">{["🌹", "💌", "✨"][i]}</span>
          </motion.div>
        ))}

        {/* Decorative bottom border with animated gradient */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-4 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-[200%] h-full bg-gradient-to-r from-pink-100 via-pink-300 to-pink-100"
            animate={{
              x: [0, "-50%"],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        </motion.div>
      </section>
    </div>
  );
}
