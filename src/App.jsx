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
} from "lucide-react";
import confetti from "canvas-confetti";
import Swal from "sweetalert2";

// Import dummy images (would be replaced with your actual photos)
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import img5 from "./assets/image5.jpg";
import img6 from "./assets/image6.jpg";
import img7 from "./assets/image7.jpg";
import img8 from "./assets/image8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-12"
          >
            <CheckSquare size={32} className="text-pink-500 mr-3" />
            <h2 className="text-4xl font-semibold text-pink-500">
              Our Bucket List
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Adventures we'll experience, memories we'll create, and dreams we'll
            chase together.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bucketListItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-pink-50 rounded-xl overflow-hidden shadow-md relative"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(236, 72, 153, 0.2), 0 8px 10px -6px rgba(236, 72, 153, 0.1)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredBucketItem(idx)}
                onHoverEnd={() => setHoveredBucketItem(null)}
              >
                <div className="p-6">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold text-pink-600 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-pink-400"
                  animate={{
                    width: hoveredBucketItem === idx ? "100%" : "0%",
                    transition: { duration: 0.4 },
                  }}
                  initial={{ width: "0%" }}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            className="mt-12 mx-auto block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg"
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Start Our Adventure Together
          </motion.button>
        </div>
      </section>

      {/* Improved Photo Album Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-12"
          >
            <Camera size={32} className="text-pink-500 mr-3" />
            <h2 className="text-4xl font-semibold text-pink-500">
              Our Photo Album
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each photo tells a story of our journey together, moments frozen in
            time that I'll cherish forever.
          </motion.p>

          {/* Gallery Masonry Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => {
              // Random heights for masonry effect
              const heights = ["h-60", "h-72", "h-80", "h-64"];
              const randomHeight = heights[idx % heights.length];

              return (
                <motion.div
                  key={idx}
                  className="overflow-hidden rounded-xl shadow-lg relative group"
                  whileHover={{
                    scale: 1.05,
                    rotate: idx % 2 === 0 ? 3 : -3,
                    zIndex: 10,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={img}
                    alt={`Our memory ${idx + 1}`}
                    className={`w-full ${randomHeight} object-cover transition-all duration-500 group-hover:scale-110`}
                  />

                  {/* Heart icon on hover */}
                  <motion.div
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Heart
                      size={24}
                      className="text-white drop-shadow-lg"
                      fill="#ffffff"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Love Letter */}
      <section className="py-20 px-6 bg-pink-50 relative overflow-hidden">
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
            className="flex items-center justify-center mb-12"
          >
            <MessageCircleHeart size={32} className="text-pink-500 mr-3" />
            <h2 className="text-4xl font-semibold text-pink-500">
              A Letter From My Heart
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowLoveNote(!showLoveNote)}
              className="bg-white rounded-xl shadow-xl p-6 w-full text-left cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 border-pink-200"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-pink-600">
                  My Love Letter to You 💌
                </h3>
                <span className="text-pink-500">
                  {showLoveNote ? "Close" : "Open"}
                </span>
              </div>

              <AnimatePresence>
                {showLoveNote && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-pink-100">
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        My dearest love,
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        Every day with you is a dream I never want to end. Your
                        smile lights up my world, your voice calms my soul, and
                        your heart is the home I never knew I needed. The way
                        you laugh at my worst jokes, how you know exactly what
                        I'm thinking without me saying a word, and the feeling
                        of your hand in mine - these are the moments I treasure
                        most.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        This journey with you is the most beautiful adventure,
                        and I want you to know that every step we take together
                        makes my heart fuller. You've shown me what it means to
                        love completely and be loved in return. You're my best
                        friend, my confidant, my partner in all things.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        I promise to stand by you, to lift you up when you need
                        strength, to celebrate your victories as my own, and to
                        face whatever challenges come our way together. My love
                        for you grows deeper with each passing day.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700">
                        Forever yours,
                        <br />
                        Nikhil
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-12"
          >
            <Gift size={32} className="text-pink-500 mr-3" />
            <h2 className="text-4xl font-semibold text-pink-500">
              Why I Love You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "The way your eyes crinkle when you smile",
              "How you always know just what to say",
              "Your incredible strength and kindness",
              "The sound of your laughter",
              "How you make ordinary moments magical",
              "The way you care so deeply for others",
              "Your passion and determination",
              "How you make me feel safe and loved",
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                className="bg-pink-50 rounded-xl p-5 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, backgroundColor: "#fbcfe8" }}
              >
                <p className="text-lg text-gray-700">
                  <span className="text-2xl text-pink-500 mr-2">❤</span>
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-12"
          >
            <Map size={32} className="text-pink-500 mr-3" />
            <h2 className="text-4xl font-semibold text-pink-500">
              Our Future Together
            </h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6">
              As we continue our journey together, here are some of the
              adventures I dream of sharing with you:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Travel the World",
                  icon: "✈️",
                  text: "Exploring new places, creating memories in cities we've always dreamed of visiting",
                },
                {
                  title: "Build Our Home",
                  icon: "🏠",
                  text: "Creating a space that's uniquely ours, filled with love and laughter",
                },
                {
                  title: "Grow Together",
                  icon: "🌱",
                  text: "Supporting each other's dreams and celebrating all of life's moments",
                },
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  className="bg-pink-50 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-4xl mb-4 block">{plan.icon}</span>
                  <h3 className="text-xl font-bold text-pink-600 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-700">{plan.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 bg-gradient-to-t from-pink-200 to-pink-50 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated heart background */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
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
                <span className="text-4xl">❤️</span>
              </motion.div>
            ))}
          </div>
        )}

        <motion.h2
          className="text-5xl font-bold text-pink-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Forever Yours
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700 max-w-xl text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Thank you for being the most amazing person in my life. My heart is
          yours, today and always.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl"
        >
          💖
        </motion.div>
      </section>
    </div>
  );
}
