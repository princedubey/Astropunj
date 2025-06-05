"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-72 bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
          >
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <h3 className="font-medium">Chat with an Astrologer</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 flex flex-col space-y-4">
              <div className="flex items-start">
                <div className="bg-muted p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Hello! How can I help you today with astrology guidance?</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="text-sm bg-muted hover:bg-muted/80 px-4 py-2 rounded-full text-left transition-colors">
                  I want to talk to an astrologer
                </button>
                <button className="text-sm bg-muted hover:bg-muted/80 px-4 py-2 rounded-full text-left transition-colors">
                  How to check my daily horoscope?
                </button>
                <button className="text-sm bg-muted hover:bg-muted/80 px-4 py-2 rounded-full text-left transition-colors">
                  Help with kundli matching
                </button>
              </div>
            </div>
            <div className="p-3 border-t border-border">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full py-2 px-4 bg-muted rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg text-white flex items-center justify-center hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}