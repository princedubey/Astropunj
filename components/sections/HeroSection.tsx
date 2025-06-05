"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const phoneImages = [
    "https://images.pexels.com/photos/7914464/pexels-photo-7914464.jpeg",
    "https://images.pexels.com/photos/7914464/pexels-photo-7914464.jpeg",
    "https://images.pexels.com/photos/7914464/pexels-photo-7914464.jpeg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % phoneImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-[9997] transition-all duration-200 ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="/ap-logo.png"
                  alt="AstroPunj Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-bold">AstroPunj</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#home" className="text-foreground hover:text-purple-600 transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-foreground hover:text-purple-600 transition-colors">
                  About
                </Link>
                <Link href="#features" className="text-foreground hover:text-purple-600 transition-colors">
                  Features
                </Link>
                <Link href="#testimonials" className="text-foreground hover:text-purple-600 transition-colors">
                  Testimonials
                </Link>
                <Link href="#faq" className="text-foreground hover:text-purple-600 transition-colors">
                  FAQ
                </Link>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <div className="h-12 w-36 bg-black rounded-lg flex items-center justify-center px-3 hover:opacity-90 transition-opacity cursor-pointer">
                  <div className="mr-2">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.609 22.186c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l1.6 1.6c.2.2.4.3.7.3.3 0 .5-.1.7-.3L17.6 14.7c.4-.4.4-1 0-1.4L6.609 1.814c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-1.6 1.6c-.2.2-.3.4-.3.7 0 .3.1.5.3.7z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Container - Outside of the nav element */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black/50 z-[9998]"
                onClick={toggleMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", damping: 20 }}
                className="md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-[9999] flex flex-col"
              >
                <div className="p-4 flex-1">
                  <div className="flex justify-end mb-4">
                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                      <Menu className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Link 
                      href="#home" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                    <Link 
                      href="#about" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      About
                    </Link>
                    <Link 
                      href="#features" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Features
                    </Link>
                    <Link 
                      href="#testimonials" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Testimonials
                    </Link>
                    <Link 
                      href="#faq" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      FAQ
                    </Link>
                    <div className="border-t border-border my-4"></div>
                    <Link 
                      href="/terms" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Terms of Service
                    </Link>
                    <Link 
                      href="/privacy" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/cookies" 
                      className="text-foreground hover:text-purple-600 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Cookie Policy
                    </Link>
                  </div>
                </div>

                {/* Mobile Download Button - Now at bottom */}
                <div className="p-4 border-t">
                  <div className="h-12 w-full bg-black rounded-lg flex items-center justify-center px-3 hover:opacity-90 transition-opacity cursor-pointer">
                    <div className="mr-2">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.609 22.186c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l1.6 1.6c.2.2.4.3.7.3.3 0 .5-.1.7-.3L17.6 14.7c.4-.4.4-1 0-1.4L6.609 1.814c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-1.6 1.6c-.2.2-.3.4-.3.7 0 .3.1.5.3.7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 dark:from-indigo-950 dark:via-purple-900 dark:to-indigo-950">
          <div className="relative container mx-auto px-4 py-32 md:py-40 flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-white z-10 mb-12 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Your Personal Astrology Guide
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Anytime, Anywhere
              </h2>
              <p className="text-lg mb-8 text-indigo-100 max-w-md">
                Connect with experienced astrologers, get daily horoscopes, and find love compatibility with AstroPunj.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100">
                  <Download className="mr-2 h-5 w-5" /> Download App
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900">
                  Learn More
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm">4.8 stars on Play Store</span>
              </div>
            </motion.div>

            {/* Right Content - Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex justify-center md:justify-end relative"
            >
              <div className="relative">
                {/* Desktop: Two Phones */}
                <div className="hidden md:flex space-x-4">
                  {/* First Phone Frame */}
                  <div className="relative w-[280px] h-[580px] rounded-[3rem] border-[14px] border-gray-900 overflow-hidden shadow-xl bg-white transform -rotate-6">
                    <Image
                      src={phoneImages[0]}
                      alt="AstroPunj App Interface"
                      width={252}
                      height={552}
                      className="object-cover w-full h-full rounded-[2.3rem]"
                      priority
                    />
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-40 bg-gray-900 rounded-b-2xl"></div>
                  </div>

                  {/* Second Phone Frame */}
                  <div className="relative w-[280px] h-[580px] rounded-[3rem] border-[14px] border-gray-900 overflow-hidden shadow-xl bg-white transform rotate-6">
                    <Image
                      src={phoneImages[1]}
                      alt="AstroPunj App Interface"
                      width={252}
                      height={552}
                      className="object-cover w-full h-full rounded-[2.3rem]"
                      priority
                    />
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-40 bg-gray-900 rounded-b-2xl"></div>
                  </div>
                </div>

                {/* Mobile: Single Phone with Transitions */}
                <div className="md:hidden">
                  <div className="relative w-[240px] h-[500px] rounded-[2rem] border-[10px] border-gray-900 overflow-hidden shadow-xl bg-white">
                    {/* App Screenshots with Transition */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={phoneImages[currentImageIndex]}
                          alt="AstroPunj App Interface"
                          width={220}
                          height={480}
                          className="object-cover w-full h-full rounded-[1.5rem]"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-32 bg-gray-900 rounded-b-xl"></div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 inset-0 blur-2xl">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-500/30 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -right-12 -bottom-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-4 shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-white" />
                    <span className="text-white font-semibold">Daily Horoscope</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 3 + 2,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}