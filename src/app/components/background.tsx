"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export default function Component() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const colors = [
      "from-emerald-400/40 to-teal-400/20",
      "from-green-400/40 to-emerald-400/20",
      "from-teal-400/40 to-green-400/20",
      "from-cyan-400/40 to-emerald-400/20",
    ]

    const newParticles: Particle[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 3,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-950">
      {/* Dynamic gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.25) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(34, 197, 94, 0.25) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(20, 184, 166, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.25) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Enhanced floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-gradient-to-r ${particle.color} backdrop-blur-sm shadow-lg`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 40 - 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/10 backdrop-blur-md shadow-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/6 w-36 h-36 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/10 backdrop-blur-md shadow-2xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [360, 0],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Animated light rays */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-emerald-400/30 via-transparent to-transparent origin-top"
        animate={{
          rotate: [0, 15, -15, 0],
          opacity: [0.3, 0.7, 0.3],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-teal-400/30 via-transparent to-transparent origin-top"
        animate={{
          rotate: [0, -20, 20, 0],
          opacity: [0.2, 0.6, 0.2],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Professional geometric elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-emerald-400/30 rounded-lg backdrop-blur-sm"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          borderColor: [
            "rgba(16, 185, 129, 0.3)",
            "rgba(20, 184, 166, 0.5)",
            "rgba(34, 197, 94, 0.3)",
            "rgba(16, 185, 129, 0.3)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Content with enhanced lighting effects */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center space-y-8 p-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {/* Spotlight effect behind heading */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent blur-3xl"
            animate={{
              x: ["-100%", "100%", "-100%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Main heading with gradient ray effect */}
          <div className="relative">
            <motion.h1
              className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent relative z-10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
                textShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
              }}
            >
              NetZero
            </motion.h1>

            {/* Animated light ray across the heading */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "200%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
                repeatDelay: 4,
              }}
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, -5% 100%)",
              }}
            />
          </div>

          <motion.p
            className="text-2xl md:text-3xl text-emerald-200 font-semibold max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Advanced B2B Solutions for Climate Innovation
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"
              animate={{
                scaleX: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* Professional tagline */}
          <motion.div
            className="text-emerald-300/80 text-lg font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Sustainable • Innovative • Global
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-emerald-400/50"
        animate={{
          borderColor: ["rgba(16, 185, 129, 0.5)", "rgba(20, 184, 166, 0.8)", "rgba(16, 185, 129, 0.5)"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-teal-400/50"
        animate={{
          borderColor: ["rgba(20, 184, 166, 0.5)", "rgba(34, 197, 94, 0.8)", "rgba(20, 184, 166, 0.5)"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  )
}
