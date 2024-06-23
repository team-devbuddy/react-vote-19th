'use client';

import React, { useState } from 'react';
import { useForm } from '@/hooks/useForm';
import { useForm } from '@/hooks/useForm';
import InputField from '@/components/layout/InputField';
import Dropdown from '@/components/layout/Dropdown';
import Dropdown from '@/components/layout/Dropdown';
import { SignUpValidation } from '@/lib/utils';
import { FormData } from '@/lib/types';
import { inputFields, teamOptions, departmentOptions } from '@/lib/data';
import { signUpRequest } from '@/lib/actions/signUpAction';
import { useRouter } from 'next/navigation';
function SignUpPage() {
  const router=useRouter();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useForm<FormData>({
  } = useForm<FormData>({
    initialValues: {
      name: '',
      userId: '',
      password: '',
      confirmPassword: '',
      email: '',
      team: '',
      department: ''
    },
    onSubmit: async (values) => {
      const result = await signUpRequest(values);
      if (result) {
        console.log('회원가입 성공');
        router.push('/login')
      } else {
        console.error('회원가입 실패');
      }
    },
    validate: SignUpValidation,
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isFormValid = Object.values(values).every(value => value !== '') &&
                      Object.keys(errors).length === 0;

  return (
    <div className="relative flex justify-center items-center h-screen overflow-y-auto w-screen text-white bg-transparent">
      {activeDropdown && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setActiveDropdown(null)}></div>}
      <div className="w-full max-w-md px-4 py-8 z-20">
        <div className="w-5/6 mx-auto">
          <h2 className="text-2xl font-bold mt-0 mb-8 text-left">회원 가입</h2>
        </div>
        <form className="bg-transparent" onSubmit={handleSubmit}>
          {inputFields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={values[field.id as keyof FormData] || ''}
              touched={!!touched[field.id as keyof FormData]}
              error={errors[field.id as keyof FormData] || ''}
              value={values[field.id as keyof FormData] || ''}
              touched={!!touched[field.id as keyof FormData]}
              error={errors[field.id as keyof FormData] || ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={(id, value) => setFieldValue(id as keyof FormData, value)}
              handleClear={(id, value) => setFieldValue(id as keyof FormData, value)}
            />
          ))}

          {touched.password && !errors.password && (
            <InputField
              id="confirmPassword"
              type="password"
              placeholder="비밀번호 확인"
              value={values.confirmPassword || ''}
              touched={!!touched.confirmPassword}
              error={errors.confirmPassword || ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={(id, value) => setFieldValue(id as keyof FormData, value)}
              handleClear={(id, value) => setFieldValue(id as keyof FormData, value)}
            />
          )}

          <div className="mb-5 w-5/6 mx-auto flex justify-between items-center relative space-x-4">
          <div className="mb-5 w-5/6 mx-auto flex justify-between items-center relative space-x-4">
            <InputField
              id="email"
              type="email"
              placeholder="이메일 주소"
              value={values.email || ''}
              value={values.email || ''}
              touched={!!touched.email}
              error={errors.email || ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={(id, value) => setFieldValue(id as keyof FormData, value)}
              handleClear={(id, value) => setFieldValue(id as keyof FormData, value)}
            />
            <button
              className="mb-4  min-w-12 bg-gray-600 hover:bg-gray-700 text-white py-1 px-1.5 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              인증
            </button>
          </div>

          <div className="mb-5 w-5/6 mx-auto flex justify-between relative space-x-4">
            <Dropdown
              label="팀 선택"
              options={teamOptions.map(option => option.name)}
              selectedOption={values.team || ''}
              setSelectedOption={(value) => setFieldValue('team', value)}
              isOpen={activeDropdown === 'team'}
              onOpen={() => setActiveDropdown('team')}
              onClose={() => setActiveDropdown(null)}
            />
            <Dropdown
              label="파트 선택"
              options={departmentOptions}
              selectedOption={values.department || ''}
              setSelectedOption={(value) => setFieldValue('department', value)}
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
