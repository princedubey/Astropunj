"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the astrology predictions?",
    answer:
      "Our astrologers provide predictions based on authentic Vedic astrology principles with a high degree of accuracy. The specificity and accuracy of predictions depend on the details you provide, such as your exact birth time and location. For the most accurate readings, we recommend providing complete birth details.",
  },
  {
    question: "How do I connect with an astrologer?",
    answer:
      "You can connect with our verified astrologers through chat or call directly from the app. Simply browse through our list of astrologers, view their specialties, ratings, and availability, then select your preferred mode of consultation. You can also schedule appointments for future consultations.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "AstroPunj accepts multiple payment methods including credit/debit cards, UPI, net banking, and popular mobile wallets. All transactions are secured with industry-standard encryption to ensure your financial information remains safe.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, AstroPunj offers a satisfaction guarantee. If you're not satisfied with your consultation, you can request a refund within 24 hours of the session. Our customer support team will review your case and process eligible refunds promptly.",
  },
  {
    question: "Is my personal information kept confidential?",
    answer:
      "Absolutely. We take privacy very seriously. Your personal information and consultation details are strictly confidential and are never shared with third parties. Our astrologers are also bound by a code of ethics that includes maintaining client confidentiality.",
  },
  {
    question: "Are the astrologers verified and experienced?",
    answer:
      "Yes, all astrologers on our platform undergo a rigorous verification process. We check their credentials, experience, and expertise before they can offer consultations. We also regularly monitor their performance and user feedback to ensure quality service.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background relative">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-purple-600 dark:text-purple-400">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about AstroPunj and our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950/40 dark:to-indigo-950/40 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is always ready to help you with any questions about our services.
            </p>
            <div className="inline-flex items-center justify-center bg-white dark:bg-background px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Contact Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}