"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Calendar, Users, BookOpen, Star, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const features = [
  {
    icon: <MessageCircle className="h-10 w-10" />,
    title: "Chat with Astrologers",
    description: "Connect instantly with expert astrologers through text chat for quick guidance.",
    details: "Get personalized readings and instant answers to your questions through our secure chat platform. Our verified astrologers are available 24/7 to provide guidance on career, relationships, and life decisions.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Phone className="h-10 w-10" />,
    title: "Call Consultation",
    description: "Have in-depth voice conversations with experienced astrologers for detailed readings.",
    details: "Schedule voice calls with our expert astrologers for comprehensive readings. Discuss your birth chart, planetary positions, and get detailed insights about your future path.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: "Daily Horoscope",
    description: "Get personalized daily, weekly, and monthly horoscope predictions for your sign.",
    details: "Access accurate horoscope predictions based on your zodiac sign and birth chart. Receive daily updates about career opportunities, love life, and general well-being.",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Kundli Matching",
    description: "Check compatibility with your partner through detailed Kundli matching reports.",
    details: "Get comprehensive compatibility analysis based on traditional Vedic astrology. Our detailed reports cover all aspects of relationship compatibility including nature, career, and life goals.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Calendar className="h-10 w-10" />,
    title: "Live Sessions",
    description: "Join scheduled live sessions with renowned astrologers on various topics.",
    details: "Participate in interactive live sessions covering various aspects of astrology. Learn from expert astrologers, ask questions, and gain deeper insights into cosmic influences.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Learning Resources",
    description: "Access articles and videos to learn about astrology, zodiac signs, and more.",
    details: "Explore our extensive library of educational content about astrology. Learn about planetary movements, zodiac signs, houses, and how they influence your life.",
    color: "from-green-500 to-teal-500",
  },
];

export default function FeaturesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Explore Our <span className="text-purple-600 dark:text-purple-400">Celestial Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover all the ways AstroPunj can help you navigate life's journey with cosmic wisdom
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="overflow-hidden h-full bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${feature.color} mb-6 w-fit text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-border"
                      >
                        <p className="text-muted-foreground">{feature.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 flex items-center justify-between text-sm text-purple-600 dark:text-purple-400 font-medium">
                    <span>Learn more</span>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="py-8 px-4 md:px-8 rounded-xl bg-card border border-border inline-block">
            <h3 className="text-xl font-semibold mb-4">Experience the Complete Astrology Suite</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              With the AstroPunj app, you have the entire universe of astrological wisdom in your hands.
              Our integrated platform offers everything you need for spiritual guidance.
            </p>
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Explore All Features</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}