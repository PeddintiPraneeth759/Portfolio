import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      id: 1,
      institution: 'KL University',
      degree: 'B.Tech CSE',
      year: 'Expected 2027',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering.',
      icon: <FaUniversity />,
    },
    {
      id: 2,
      institution: 'Sasi Junior College',
      degree: 'Intermediate MPC',
      year: '2022',
      description: 'Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry.',
      icon: <FaSchool />,
    },
    {
      id: 3,
      institution: 'Sri Siddhartha High School',
      degree: 'Secondary School',
      year: '2020',
      description: 'Completed secondary education.',
      icon: <FaGraduationCap />,
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get to know me!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate <strong>Full Stack Web Developer</strong> based in India. I enjoy building web applications that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I am currently pursuing my B.Tech in Computer Science at KL University. My journey in tech has been driven by curiosity and a desire to create.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, learning about AI agents, or working on personal projects to sharpen my skills.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="relative"
          >
             {/* Placeholder for About Image */}
             <div className="w-full h-64 md:h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-inner">
                <span className="text-gray-400 dark:text-gray-500 font-medium">Profile Image Placeholder</span>
             </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {edu.icon}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-gray-900 dark:text-white">{edu.institution}</div>
                    <time className="font-caveat font-medium text-primary dark:text-blue-400">{edu.year}</time>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">{edu.degree}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm mt-2">{edu.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
