'use client';

import { motion } from 'framer-motion';
import { ArrowUp, /*Github,*/ Linkedin, Mail /*ExternalLink*/ } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
   /* {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
    },
    */
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/connorhegg',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'connorhegg@gmail.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <Image
                  src="/images/FreshEggEngineeringLogo.png"
                  alt="FreshEgg Engineering"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional 3D modeling, engineering visualization, and simulation services 
                for modern engineering teams and innovative projects.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white rounded-lg transition-all duration-200 focus-ring"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors focus-ring"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>connorhegg@gmail.com</p>
                <p>+1 (540) 435 - 1803</p>
                <p className="text-sm">Available for new remote opportunities </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FreshEggEng. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">Built with Next.js & Tailwind CSS</p>
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white rounded-lg transition-all duration-200 focus-ring"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
