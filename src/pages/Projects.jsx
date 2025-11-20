import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import chatAppImg from '../imageas/chatbotimage.png';

const Projects = () => {
  const projects = [
    {
      title: 'Chat Application',
      description: 'A real-time chat application enabling users to send messages and share images instantly. Built with Socket.io and Node.js for seamless communication.',
      tags: ['React', 'Tailwind', 'Node.js', 'Socket.io'],
      githubLink: 'https://github.com/PeddintiPraneeth759/chatApplication.git',
      demoLink: 'https://chatapplication-3m3r4.sevalla.app/',
      image: chatAppImg,
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive system for managing hospital operations. Features include patient registration, appointment scheduling, and doctor management. Built with a React frontend and Spring Boot backend.',
      tags: ['React', 'Spring Boot', 'MySQL', 'Tailwind'],
      githubLink: 'https://github.com/PeddintiPraneeth759/FinalProject_Frontend.git',
      backendGithubLink: 'https://github.com/PeddintiPraneeth759/FinalProject_Backend.git',
      demoLink: '#',
    },
    {
      title: 'Web Automation Project',
      description: 'A versatile web automation tool utilizing Playwright and AI agents. Leverages LangGraph for multi-agent tasks and LLMs to streamline repetitive processes and increase efficiency.',
      tags: ['Playwright', 'LangGraph', 'LLM', 'AI Agents'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Fake News Assistant Chatbot',
      description: "An AI-powered chatbot designed to verify news authenticity using LLMs, LangChain, and LangGraph. It analyzes content to determine if it's real or fake, helping to combat misinformation.",
      tags: ['LLM', 'LangChain', 'LangGraph', 'NLP'],
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
