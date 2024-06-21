'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { DropdownProps } from '@/lib/types';
import { dropdownVariants } from '@/lib/animation';
import { handleClickOutside } from '@/lib/utils';

function Dropdown({ label, options, selectedOption, setSelectedOption }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value === selectedOption ? '' : value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = handleClickOutside(dropdownRef, setIsOpen);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-1/2">
      <div
        className={`bg-black text-white border-b-2 py-2 px-3 flex justify-between items-center cursor-pointer ${isOpen ? 'border-main' : 'border-gray-600'}`}
        onClick={toggleDropdown}
      >
        <span>{selectedOption || label}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute w-full mt-1 z-10 flex flex-wrap "
          >
            {options.map(option => (
              <div
                key={option}
                className={`bg-white m-1 py-1 px-2 cursor-pointer rounded-full border text-sm font-semibold ${selectedOption === option ? 'text-main border-main' : 'text-BG-black border-none'} hover:text-white hover:bg-main transform transition-transform duration-150 hover:scale-105`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
