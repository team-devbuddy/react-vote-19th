import React from 'react';
import { ErrorModalProps } from '@/lib/types';

const ErrorModal = ({ message, isOpen, onClose }: ErrorModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="relative bg-[rgba(40,45,56,1)] p-8 rounded-lg text-white shadow-lg ">
        <button
          className="absolute top-7 right-7 text-main font-bold text-xl leading-none hover:text-gray-300"
          onClick={onClose}
          aria-label="Close"
        >
          &times; 
        </button>
        <h2 className="text-lg font-bold ">알림</h2>
        <p className="mt-4  font-bold">{message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
