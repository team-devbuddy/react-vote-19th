'use client';

import React, { useState } from 'react';
import { useForm } from '@/hooks/useForm';

import InputField from '@/components/layout/InputField';
import Dropdown from '@/components/layout/Dropdown';

import { SignUpValidation } from '@/lib/utils';
import { FormData, initialFormData } from '@/lib/types';
import { inputFields, teamOptions, departmentOptions } from '@/lib/data';
import { signUpRequest } from '@/lib/actions/signUpAction';
import { useRouter } from 'next/navigation';

function SignUpPage() {
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useForm<FormData>({
    initialValues: initialFormData,
    onSubmit: async (values) => {
      try {
        const response = await signUpRequest(values);
        const result = await response.json();
        console.log('회원가입 성공:', result);
        router.push('/login');
      } catch (error) {
        console.error('회원가입실패:', error);
      }
    },
    validate: SignUpValidation,
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isFormValid = Object.values(values).every((value) => value !== '') && Object.keys(errors).length === 0;

  return (
    <div className="relative flex w-full items-center justify-center overflow-y-auto bg-transparent text-white">
      {activeDropdown && (
        <div className="fixed inset-0 z-10 bg-black opacity-50" onClick={() => setActiveDropdown(null)}></div>
      )}
      <div className="z-20 w-full px-4 py-8">
        <div className="mx-auto w-5/6">
          <h2 className="mb-8 mt-0 text-left text-2xl font-bold">회원 가입</h2>
        </div>
        <form className="bg-transparent" onSubmit={handleSubmit}>
          {inputFields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={values[field.id as keyof FormData] || ''}
              touched={!!touched[field.id as keyof FormData]}
              error={errors[field.id as keyof FormData] || ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
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
            />
          )}

          <div className="flex w-5/6 mx-auto items-center justify-between gap-4">
            <InputField
              id="email"
              type="email"
              placeholder="이메일 주소"
              value={values.email || ''}
              touched={!!touched.email}
              error={errors.email || ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={(id, value) => setFieldValue(id as keyof FormData, value)}
            />
            <button
              className="focus:shadow-outline mb-4 w-16 min-w-12 rounded bg-gray-600 px-2 py-1 text-white hover:bg-gray-700 focus:outline-none"
              type="button">
              인증
            </button>
          </div>

          <div className="relative mx-auto mb-5 flex w-5/6 justify-between space-x-4">
            <Dropdown
              label="팀 선택"
              options={teamOptions.map((option) => option.name)}
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
              className={`${isFormValid ? 'bg-main' : 'bg-gray-600'} focus:shadow-outline mt-10 w-5/6 rounded py-2 font-bold text-white hover:bg-gray-700 focus:outline-none`}
              type="submit"
              disabled={!isFormValid}>
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
