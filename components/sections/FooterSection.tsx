"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-card relative pt-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute bottom-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/ap-logo.png"
                alt="AstroPunj Logo"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <span className="ml-2 text-xl font-bold">AstroPunj</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Your personal astrology guide, bringing cosmic wisdom to your daily life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Chat Consultation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Call Consultation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Daily Horoscope
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Kundli Matching
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Live Sessions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">support@astropunj.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">+91 9876543210</span>
              </li>
              <li className="mt-6">
                <h4 className="font-medium mb-2">Download the App</h4>
                <div className="h-12 w-36 bg-black rounded-lg flex items-center justify-center px-3 hover:opacity-90 transition-opacity cursor-pointer">
                  <div className="mr-2">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                      <path d="M17.9 5c.1 1-.3 1.9-.8 2.7-.5.8-1.4 1.4-2.3 1.7.1-1.4.8-2.6 2-3.5.5-.4 1-.7 1.1-.9zm3.7 14.3l-1.3-1c-.1-.1-.1-.1-.2-.1-.8-.6-1.6-1.2-2.2-1.9-1-.9-1.7-1.7-2.2-2.2-.4-.3-.7-.6-1-.8-1.2-1-2.1-1.4-3.1-1.4s-1.9.4-3.1 1.4c-.3.2-.6.5-1 .8-.5.5-1.2 1.3-2.2 2.2-.7.7-1.4 1.3-2.2 1.9-.1 0-.2.1-.3.2l-1.2.9c-.3.2-.4.6-.2.9.1.2.3.3.5.4h.4c3.3 0 5.9-.3 8-1 2.3-.7 4.4-1.8 6.2-3.3.2-.1.3-.3.2-.6s-.2-.4-.1-.4z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 AstroPunj. All rights reserved. Developed by Prince Dubey
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-purple-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-purple-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-purple-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}