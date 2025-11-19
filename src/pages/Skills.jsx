import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaTools, FaBrain, FaRobot } from 'react-icons/fa';
import { SiSpringboot, SiExpress, SiMysql, SiMongodb, SiTailwindcss, SiPostman, SiGit } from 'react-icons/si';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-500' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-600' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'Artificial Intelligence', icon: <FaBrain />, color: 'text-pink-500' },
        { name: 'AI Agents', icon: <FaRobot />, color: 'text-indigo-500' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
        { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400' },
        { name: 'REST APIs', icon: <FaTools />, color: 'text-purple-500' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">My technical proficiency and toolset.</p>
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <div key={index}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 border-l-4 border-primary pl-4"
              >
                {category.category}
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
