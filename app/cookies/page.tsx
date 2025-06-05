"use client";

import { motion } from "framer-motion";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and enable certain features to work properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    Required for the website to function properly. They enable basic features like page navigation and access to secure areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground">
                    Remember your preferences and settings to provide enhanced functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website's performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Enable social media features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                Some cookies are placed by third-party services that appear on our pages. These third parties may use cookies to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Track your browsing habits</li>
                <li>Show you relevant advertisements</li>
                <li>Analyze website performance</li>
                <li>Provide social media features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in your browser settings. You can:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Delete all cookies from your browser</li>
                <li>Block cookies from being set</li>
                <li>Allow cookies from specific websites</li>
                <li>Set preferences for different types of cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground">
                If you choose to disable cookies, some features of our website may not function properly. This may affect your ability to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Access certain features and services</li>
                <li>Receive personalized content</li>
                <li>Save your preferences</li>
                <li>Use social media features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Updates to Cookie Policy</h2>
              <p className="text-muted-foreground">
                We may update this cookie policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at privacy@astropunj.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 