import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-4 group"
    >
      <div className={`text-4xl ${color} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
    </motion.div>
  );
};

export default SkillCard;
