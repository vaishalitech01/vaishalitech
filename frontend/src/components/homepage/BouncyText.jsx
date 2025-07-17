import React from 'react';
import { motion } from 'framer-motion';

const BouncyText = ({ text, className }) => {
  const lines = text.split('\n');

  return (
    <div className={`${className} whitespace-pre-line`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="mb-1">
          {line.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-2">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-block cursor-alias"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BouncyText;
