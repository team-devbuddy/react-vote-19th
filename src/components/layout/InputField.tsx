import React from 'react';
import Image from 'next/image';
import CheckBox from '/public/image/CheckBox.svg';
import Xmark from '/public/image/Xmark.svg';
import {InputFieldProps} from '@/lib/types'


const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  value,
  touched,
  error,
  handleChange,
  handleBlur,
  handleClear,
}) => {
  const maxLength = id === 'name' ? 10 : id === 'userId' ? 12 : undefined;

  return (
    <div className="relative mb-2 w-5/6 mx-auto">
      <input
        className={`w-full bg-transparent border-b-2 py-2 px-3 text-white placeholder-gray-500 focus:outline-none ${
          touched && error ? 'border-gray-600' : touched && !error ? 'border-main' : 'border-gray-600'
        }`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={maxLength}
      />
      {touched && error ? (
        <>
          <p className="text-main text-xs mt-1 h-4">{error}</p>
          <Image
            src={Xmark}
            alt="clear"
            className="absolute right-2 top-2 cursor-pointer"
            width={20}
            height={20}
            onClick={() => handleClear(id, '')}
            onMouseDown={(e) => e.preventDefault()}
          />
        </>
      ) : (
        <p className="h-5"></p>
      )}
      {touched && !error && (
        <Image src={CheckBox} alt="check" className="absolute right-2 top-2" width={20} height={20} />
      )}
    </div>
  );
};

export default InputField;
