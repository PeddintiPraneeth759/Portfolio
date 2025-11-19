import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const CertificationCard = ({ title, issuer, date, link }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-start gap-4"
    >
      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-primary dark:text-blue-400">
        <FaAward size={24} />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{issuer}</p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mb-4">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary dark:text-blue-400 hover:underline"
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
