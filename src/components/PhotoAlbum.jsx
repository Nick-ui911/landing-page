import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, ChevronDown } from 'lucide-react';
// Import dummy images (would be replaced with your actual photos)
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.jpg";
import img9 from "../assets/image9.jpg";
import img10 from "../assets/image10.jpg";
import img11 from "../assets/image11.jpeg";
import img12 from "../assets/image12.jpeg";
import img13 from "../assets/image13.jpeg";
import img14 from "../assets/image14.jpeg";

export default function PhotoAlbum() {
  // Sample placeholder image URLs - replace with your actual images
  const allImages = [
     img1,
     img2,
     img3,
     img4,
     img5,
     img6,
     img7,
     img8,
     img9,
     img10,
     img11,
     img12,
     img13,
     img14,
  ];
  
  // State to track how many images to show
  const [visibleImages, setVisibleImages] = useState(4);
  
  // Function to handle loading more images
  const handleLoadMore = () => {
    // Add 4 more images at a time, or show all remaining
    setVisibleImages(prev => Math.min(prev + 4, allImages.length));
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8 md:mb-12"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Camera size={28} className="text-pink-500 mr-2" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-pink-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Photo Album
          </motion.h2>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileTap={{ scale: 1.02 }}
        >
          Each photo tells a story of our journey together, moments frozen in
          time that I'll cherish forever.
        </motion.p>

        {/* Gallery Masonry Layout with Staggered Animation */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence>
            {allImages.slice(0, visibleImages).map((img, idx) => {
              // More compact heights for mobile
              const heights = ["h-48", "h-56", "h-52", "h-44"];
              const randomHeight = heights[idx % heights.length];

              // Reduced rotation for better mobile viewing
              const initialRotation = idx % 2 === 0 ? -1 : 1;

              return (
                <motion.div
                  key={idx}
                  className="overflow-hidden rounded-lg shadow-md relative group bg-white p-2 md:p-3"
                  initial={{ 
                    opacity: 0, 
                    y: 30, 
                    rotate: initialRotation,
                    scale: 0.9 
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: initialRotation,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: idx < 4 ? 0.1 * idx : 0.1 * (idx % 4)
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: idx % 2 === 0 ? 3 : -3,
                    zIndex: 10,
                  }}
                  whileTap={{
                    scale: 1.05,
                    rotate: idx % 2 === 0 ? 3 : -3,
                    zIndex: 10,
                  }}
                >
                  <div className="overflow-hidden rounded-sm">
                    <motion.img
                      src={img}
                      alt={`My Love ${idx + 1}`}
                      className={`w-full ${randomHeight} object-cover`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Caption always visible on mobile, appears on hover for desktop */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-4 text-white md:transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                  >
                    <p className="text-xs md:text-sm font-medium">
                      Memory #{idx + 1}
                    </p>
                  </motion.div>

                  {/* Heart icon with animation - always visible on mobile */}
                  <motion.div
                    className="absolute top-3 right-3"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileTap={{ scale: 1.4, rotate: 20 }}
                    transition={{
                      delay: 0.4 + idx * 0.05,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Heart
                      size={20}
                      className="text-pink-500 drop-shadow-sm"
                      fill="rgba(236, 72, 153, 0.6)"
                    />
                  </motion.div>

                  {/* Date tag in corner - simplified for mobile */}
                  <motion.div
                    className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded text-xs font-medium text-gray-700 shadow-sm"
                    initial={{ opacity: 0.8, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                  >
                    {new Date(
                      2023,
                      idx % 12,
                      (idx % 28) + 1
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* "Load More" Button - Show only if there are more images to load */}
        {visibleImages < allImages.length && (
          <motion.div
            className="mt-8 md:mt-12 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-md flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleLoadMore}
            >
              <span className="mr-2">Load More</span>
              <ChevronDown size={18} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}