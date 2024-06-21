'use client';

import React, { useState } from 'react';
import Dropdown from '@/components/layout/Dropdown';
import useForm from '@/hooks/useForm';
import { SignUpValidation } from '@/lib/utils';
import { FormData } from '@/lib/utils/types';
import Image from 'next/image';
import CheckBox from '/public/image/CheckBox.svg';

const inputFields = [
  { id: 'name', type: 'text', placeholder: '이름', maxLength: 10 },
  { id: 'username', type: 'text', placeholder: '아이디', maxLength: 12 },
  { id: 'password', type: 'password', placeholder: '비밀번호' },
  { id: 'confirmPassword', type: 'password', placeholder: '비밀번호 확인' }
];

const teamOptions = ['비트버디', '아지토', '커플로그', '티그', '펫플레이트'];
const departmentOptions = ['기획', '디자인', '프론트엔드', '백엔드'];

function SignUpPage() {
  const {
    values,
    errors,
    touched,
    isLoading,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    initialValues: {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      team: '',
      department: ''
    },
    onSubmit: (values: FormData) => {
      console.log('Form submitted successfully:', values);
    },
    validate: SignUpValidation
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isFormValid = Object.keys(errors).length === 0 &&
                      values.team !== '' &&
                      values.department !== '';

  return (
    <div className="relative flex justify-center items-center h-screen overflow-y-auto w-screen text-white bg-black">
      {activeDropdown && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setActiveDropdown(null)}></div>}
      <div className="w-full max-w-md px-4 py-8 z-20">
        <div className="w-5/6 mx-auto">
          <h2 className="text-2xl font-bold mt-0 mb-8 text-left">회원 가입</h2>
        </div>
        <form className="bg-transparent" onSubmit={handleSubmit}>
          {inputFields.map(field => (
            <div key={field.id} className="relative mb-5 w-5/6 mx-auto">
              <input
                className={`w-full bg-transparent border-b-2 py-2 px-3 text-white placeholder-gray-500 focus:outline-none ${touched[field.id as keyof FormData] && errors[field.id as keyof FormData] ? 'border-gray-600' : touched[field.id as keyof FormData] && !errors[field.id as keyof FormData] ? 'border-main' : 'border-gray-600'}`}
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={values[field.id as keyof FormData]}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={field.maxLength || undefined}
              />
              {touched[field.id as keyof FormData] && errors[field.id as keyof FormData] && <p className="text-main text-xs mt-1">{errors[field.id as keyof FormData]}</p>}
              {touched[field.id as keyof FormData] && !errors[field.id as keyof FormData] && <Image src={CheckBox} alt="check" className="absolute right-2 top-2" width={20} height={20} />}
            </div>
          ))}

          <div className="relative mb-5 w-5/6 mx-auto flex items-center">
            <input
              className={`flex-grow bg-transparent border-b-2 py-1 px-3 text-white placeholder-gray-500 focus:outline-none ${touched.email && errors.email ? 'border-gray-600' : touched.email && !errors.email ? 'border-main' : 'border-gray-600'}`}
              id="email"
              type="email"
              placeholder="이메일 주소"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              className="ml-2 bg-gray-600 hover:bg-gray-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              // onClick={handleEmailVerification}
            >
              인증
            </button>
            {touched.email && errors.email && <p className="text-main text-xs mt-1">{errors.email}</p>}
            {touched.email && !errors.email && <Image src={CheckBox} alt="check" className="absolute right-14 top-2" width={20} height={20} />}
          </div>
          <div className="mb-5 w-5/6 mx-auto flex justify-between relative space-x-4">
            <Dropdown
              label="팀 선택"
              options={teamOptions}
              selectedOption={values.team}
              setSelectedOption={(value) => handleChange({ target: { id: 'team', value } } as React.ChangeEvent<HTMLInputElement>)}
              isOpen={activeDropdown === 'team'}
              onOpen={() => setActiveDropdown('team')}
              onClose={() => setActiveDropdown(null)}
            />
            <Dropdown
              label="파트 선택"
              options={departmentOptions}
              selectedOption={values.department}
              setSelectedOption={(value) => handleChange({ target: { id: 'department', value } } as React.ChangeEvent<HTMLInputElement>)}
              isOpen={activeDropdown === 'department'}
              onOpen={() => setActiveDropdown('department')}
              onClose={() => setActiveDropdown(null)}
            />
          </div>
          
          <div className="flex items-center justify-center">
            <button
              className={`${isFormValid ? 'bg-main' : 'bg-gray-600'} mt-10 hover:bg-gray-700 text-white font-bold py-2 w-5/6 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
              disabled={!isFormValid}
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
