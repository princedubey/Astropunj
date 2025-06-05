"use client";

import { motion } from "framer-motion";
import { Star, Moon, Sun, Cloud } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/20"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2"
          >
            <div className="relative w-full h-full flex justify-center">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg"
                >
                  <Star className="h-8 w-8 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Expert Astrologers</h3>
                  <p className="text-sm text-muted-foreground">
                    Verified and experienced astrologers to guide you.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg mt-12"
                >
                  <Moon className="h-8 w-8 text-indigo-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Cosmic Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    In-depth horoscope and planetary analysis.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg"
                >
                  <Sun className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Daily Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized daily forecasts and advice.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg mt-12"
                >
                  <Cloud className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Life Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Get answers to life's important questions.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover the <span className="text-purple-600 dark:text-purple-400">Cosmic Connection</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              AstroPunj brings ancient astrological wisdom to your fingertips through modern technology.
              Our app connects you with expert astrologers who provide authentic guidance on various
              aspects of your life.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Whether you're seeking clarity about your career, relationships, or personal growth,
              our detailed horoscopes, compatibility reports, and live consultations provide the
              insights you need for a more aligned and fulfilling life.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Accurate Predictions</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">24/7 Availability</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Private Consultations</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Vedic Astrology</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="font-bold text-4xl text-purple-600 dark:text-purple-400 mr-4">100K+</div>
              <p className="text-sm text-muted-foreground">Satisfied users who found clarity through our platform</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}