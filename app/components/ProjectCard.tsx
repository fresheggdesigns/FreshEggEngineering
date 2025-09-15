'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Tag, ExternalLink } from 'lucide-react';
import { Project } from '@/app/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="glass rounded-xl overflow-hidden card-hover">
        {/* Media Container */}
        <div className="relative aspect-video overflow-hidden">
          {project.cover.endsWith('.mkv') || project.cover.endsWith('.mp4') || project.cover.endsWith('.webm') ? (
            <video
              src={project.cover}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <ExternalLink size={20} className="text-white" />
            </motion.div>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white flex items-center gap-1">
            <Calendar size={14} />
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          {project.description && (
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-1">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50 flex items-center gap-1"
              >
                <Tag size={10} />
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded border border-gray-600/50">
                +{project.tools.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
