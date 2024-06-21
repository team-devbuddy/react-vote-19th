'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface DropdownProps {
  label: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

function Dropdown({ label, options, selectedOption, setSelectedOption }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value === selectedOption ? '' : value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
      {isOpen && (
        <ul className="absolute bg-black text-white w-full border border-gray-600 mt-1 z-10 max-h-40 overflow-y-auto">
          {options.map(option => (
            <li
              key={option}
              className={`py-2 px-3 cursor-pointer hover:text-white hover:bg-main ${selectedOption === option ? 'text-main' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
