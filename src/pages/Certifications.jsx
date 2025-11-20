import React from 'react';
import { motion } from 'framer-motion';
import CertificationCard from '../components/CertificationCard';
import linguaskillPdf from '../imageas/Peddinti Praneeth.pdf';
import jenkinsPdf from '../imageas/Coursera_Jenkins.pdf';
import eduskillsPdf from '../imageas/PRANEETH PEDDINTI_Eduskills.pdf';

const Certifications = () => {
  const certifications = [
    {
      title: 'Linguaskill General',
      issuer: 'Cambridge Assessment English',
      date: '2024',
      link: linguaskillPdf,
      description: 'Demonstrated proficiency in English language skills including listening, reading, speaking, and writing. Achieved CEFR Level B2/C1.',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
      issuer: 'Oracle',
      date: '2025',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=93E3001A04D3F57A937682FC294C071A4AAD48E1D8258090A341E6B85656A607#',
      description: "Designed for DevOps engineers and developers, this course covers core DevOps principles and Oracle Cloud Infrastructure (OCI) capabilities. It includes application development, testing, security, and deployment, preparing you for the OCI DevOps Professional Certification.",
    },
    {
      title: 'Jenkins Technologies',
      issuer: 'Coursera',
      date: '2024',
      link: jenkinsPdf,
      description: 'Comprehensive training on Jenkins for Continuous Integration and Continuous Delivery (CI/CD). Covers installation, configuration, pipelines, and automated testing integration.',
    },
    {
      title: 'Web Full Stack Developer Virtual Internship',
      issuer: 'EduSkills',
      date: 'April - June 2025',
      link: eduskillsPdf,
      description: 'Successfully completed 10 weeks Web Full Stack Developer Virtual Internship. Supported by AICTE.',
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
            <motion.div key={index} variants={itemVariants} className="h-full">
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
