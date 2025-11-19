import React from 'react';
import { motion } from 'framer-motion';
import CertificationCard from '../components/CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Full Stack Developer',
      issuer: 'Example Organization',
      date: 'August 2024',
      link: '#',
    },
    {
      title: 'React.js Advanced Concepts',
      issuer: 'Online Learning Platform',
      date: 'June 2024',
      link: '#',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Tech University',
      date: 'March 2024',
      link: '#',
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'Cloud Provider',
      date: 'January 2024',
      link: '#',
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">My professional achievements and learning milestones.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
