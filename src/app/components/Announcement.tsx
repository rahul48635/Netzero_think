import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence,Variants } from 'framer-motion';

export const AnnouncementSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Array of team members/announcements
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Arne Lorenzen",
      image: "/core_team/06.jpeg",
      announcement: "Welcome Mr. Arne Lorenzen",
      description: "We are pleased to announce that Mr. Arne Lorenzen, an internationally respected leader in the clean energy sector, has joined the Advisory Board of Net Zero Think.",
      details: "With his vast experience and strategic vision, Mr. Lorenzen will help grow & strengthen our company delivering decarbonisation solutions, and supporting industries worldwide in their net zero journey.",
      welcomeMessage: "Join us in warmly welcoming Mr. Arne Lorenzen to the Net Zero Think family."
    },
    {
      id: 2,
      name: "Marketing & Social Media Intern",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23grad2)'/%3E%3Ccircle cx='100' cy='75' r='25' fill='%23374151'/%3E%3Cpath d='M100 110 C85 110, 70 125, 70 140 L70 160 L130 160 L130 140 C130 125, 115 110, 100 110 Z' fill='%23374151'/%3E%3C/svg%3E",
      announcement: "Hiring for Marketing & Social Media Intern",
      description: "We are looking for a creative and motivated Marketing & Social Media Intern to join our team. As an intern, you will help us build our online presence, engage with our audience, and support marketing initiatives. This is a great opportunity to gain hands-on experience in digital marketing, content creation, and brand strategy.",
      details: " ",
      welcomeMessage: "Please Apply through Career Section"
    },
  
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const goToSlide = (index:number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1);
  };

  const currentMember = teamMembers[currentIndex];

  // Animation variants
  const slideVariants = {
    enter: (direction:number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction:number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const textVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants:Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 rounded-2xl" id="announcements">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Announcements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest team additions and company milestones as we continue to grow our mission towards a sustainable future.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Navigation Arrows */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          
          <motion.button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div 
              key={currentMember.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="flex flex-col lg:flex-row min-h-[400px]"
            >
              {/* Left Content Section */}
              <div className="bg-yellow-400 p-8 lg:w-2/3 flex flex-col justify-center">
                <motion.h1 
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4"
                >
                  {currentMember.announcement}
                </motion.h1>
                
                <div className="text-gray-800 space-y-4">
                  <motion.p 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                    className="text-lg"
                  >
                    {currentMember.description}
                  </motion.p>
                  
                  <motion.p 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    className="text-lg"
                  >
                    {currentMember.details}
                  </motion.p>
                  
                  <motion.p 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="text-lg font-medium mt-6"
                  >
                    {currentMember.welcomeMessage}
                  </motion.p>
                </div>
              </div>
              
              {/* Right Profile Section */}
              <div className="bg-slate-800 p-8 lg:w-1/3 flex flex-col items-center justify-center text-center">
                {/* Profile Image Container */}
                <motion.div 
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-6"
                >
                  <motion.div 
                    className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mx-auto"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -1, 1, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <motion.img 
                      src={currentMember.image}
                      alt={currentMember.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-yellow-400 font-bold text-lg mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {currentMember.name}
                </motion.div>
                
                {/* Slide indicators */}
                <motion.div 
                  className="flex space-x-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {teamMembers.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex 
                          ? 'bg-yellow-400' 
                          : 'bg-yellow-400/50'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ 
                        scale: index === currentIndex ? 1.25 : 1,
                        opacity: index === currentIndex ? 1 : 0.6
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Bottom accent bar */}
          <motion.div 
            className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
          
          {/* Progress bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-yellow-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / teamMembers.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Slide counter */}
        <motion.div 
          className="text-center mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-sm">
            {currentIndex + 1} of {teamMembers.length}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementSection;