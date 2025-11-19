import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the project. This is a placeholder text to demonstrate the layout. It highlights the key features and purpose of the project.',
      tags: ['React', 'Tailwind', 'Node.js'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Project Two',
      description: 'Another interesting project showcasing different skills. It solves a specific problem and uses modern technologies.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Project Three',
      description: 'A creative application with complex UI interactions. Built to test the limits of frontend performance.',
      tags: ['Vue.js', 'Firebase', 'SCSS'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Project Four',
      description: 'A data visualization dashboard providing insights into complex datasets. Uses D3.js for rendering charts.',
      tags: ['D3.js', 'React', 'API'],
      githubLink: '#',
      demoLink: '#',
    },
  ];

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
    },
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">A selection of my recent work.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
