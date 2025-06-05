"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "PS",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Entrepreneur",
    content:
      "AstroPunj has transformed my approach to important business decisions. The insights from astrologers have been remarkably accurate and helpful. Highly recommend!",
    rating: 5,
  },
  {
    name: "Raj Mehta",
    avatar: "RM",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "IT Professional",
    content:
      "I was skeptical at first, but the compatibility matching helped me understand my relationship dynamics better. The astrologers are knowledgeable and genuine.",
    rating: 4,
  },
  {
    name: "Anjali Patel",
    avatar: "AP",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Teacher",
    content:
      "The daily horoscope predictions are so accurate it's almost scary! AstroPunj has become an essential part of my morning routine. The app is beautiful and easy to use.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    avatar: "VS",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Doctor",
    content:
      "I consulted with an astrologer during a difficult career transition and the guidance was invaluable. The call quality was excellent and the astrologer was patient with all my questions.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background via-accent/20 to-background relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600 dark:text-purple-400">Celestial</span> Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about how AstroPunj has helped them navigate life's journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 bg-card relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-bl-3xl transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <Avatar className="h-12 w-12 border-2 border-purple-200 dark:border-purple-900">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="absolute right-0 top-0">
                    <Quote className="h-8 w-8 text-purple-400/30" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 relative z-10">{testimonial.content}</p>

                <div className="flex items-center relative z-10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 fill-gray-300 dark:text-gray-600 dark:fill-gray-600"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">Verified User</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-card rounded-xl border border-border max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">Join our growing community</h3>
              <p className="text-muted-foreground">
                Download the app today and start your cosmic journey with over 100,000 satisfied users.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Download Now</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}