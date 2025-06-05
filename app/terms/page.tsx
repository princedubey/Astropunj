"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using AstroPunj, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                AstroPunj provides astrology services including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Daily horoscopes and predictions</li>
                <li>Personalized astrological consultations</li>
                <li>Kundli matching and compatibility analysis</li>
                <li>Live sessions with experienced astrologers</li>
                <li>Chat and call consultations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a user of AstroPunj, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate personal information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the services for personal purposes only</li>
                <li>Not share or resell our services</li>
                <li>Not use our services for any illegal purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Our payment terms include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All payments are processed securely through our payment partners</li>
                <li>Consultation fees are non-refundable once the service is provided</li>
                <li>Subscription services can be cancelled anytime</li>
                <li>Prices are subject to change with prior notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, including text, graphics, logos, and software, is the property of AstroPunj and is protected by intellectual property laws. Users may not copy, modify, or distribute our content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                AstroPunj provides astrological guidance and predictions for entertainment and personal growth purposes. We are not responsible for any decisions made based on our services. Users should exercise their own judgment and discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions regarding these terms, please contact us at support@astropunj.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 