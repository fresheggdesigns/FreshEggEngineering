'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cpu, 
  Zap, 
  Layers, 
  Settings, 
  Target, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'CAD Modeling',
    description: 'Precision 3D modeling with industry-standard software'
  },
  {
    icon: Zap,
    title: 'DFM/DFA',
    description: 'Design for Manufacturing and Assembly optimization'
  },
  {
    icon: Layers,
    title: 'Exploded Views',
    description: 'Technical documentation and assembly visualization'
  },
  {
    icon: Settings,
    title: 'Animation',
    description: 'Motion studies and assembly animations'
  },
  {
    icon: Target,
    title: 'Photoreal Rendering',
    description: 'High-quality visualizations with PBR materials'
  },
  {
    icon: Lightbulb,
    title: 'Simulation',
    description: 'FEA, CFD, and motion analysis'
  }
];

const tools = [
  'Fusion 360', 'SolidWorks', 'Inventor', 'CATIA', 'Rhino', 'Blender',
  'KeyShot', 'V-Ray', 'ANSYS', 'ABAQUS', 'MATLAB', 'RobotStudio'
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Engineering Excellence
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Combining technical expertise with creative vision to deliver 
              precision-engineered solutions that push the boundaries of what's possible.
            </motion.p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Image/Logo Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Cpu size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">3D Engineering</h3>
                  <p className="text-gray-400">Professional Portfolio</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio and Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">About the Work</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Specializing in advanced 3D modeling, engineering visualization, and simulation, 
                I create detailed technical documentation and photorealistic renders that bridge 
                the gap between concept and reality.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                With expertise spanning multiple industries including aerospace, automotive, 
                medical devices, and consumer electronics, I deliver solutions that meet 
                the highest standards of precision and innovation.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">12+</div>
                  <div className="text-sm text-gray-400">Toolchain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">6+</div>
                  <div className="text-sm text-gray-400">Industries</div>
                </div>
              </div>

              <motion.button
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Portfolio
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">Core Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <capability.icon 
                    size={32} 
                    className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" 
                  />
                  <h4 className="text-xl font-semibold mb-2">{capability.title}</h4>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 hover:text-blue-300 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
