'use client';

import React from 'react';
import InputField from '@/components/layout/InputField';
import { useForm } from '@/hooks/useForm';

import { LoginValidation } from '@/lib/utils';

import { LoginFormData } from '@/lib/types';
import { loginInputFields } from '@/lib/data';
import { loginRequest } from '@/lib/actions/loginAction';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useForm<LoginFormData>({
    initialValues: {
      userId: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const result = await loginRequest(values);
        localStorage.setItem('token', result.token);
        router.push('/');
      } catch (error) {
        console.error('로그인 중 오류 발생', error);
      }
    },
    validate: LoginValidation,
  });

  const isFormValid = Object.values(values).every((value) => value !== '') && Object.keys(errors).length === 0;

  return (
    <div className="relative flex w-full items-center justify-center overflow-y-auto bg-BG-black text-white">
      <div className="z-20 w-full px-4 py-8">
        <div className="mx-auto w-5/6">
          <h2 className="mb-8 mt-0 text-left text-2xl font-bold">로그인</h2>
        </div>
        <form className="bg-transparent" onSubmit={handleSubmit}>
          {loginInputFields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={values[field.id as keyof LoginFormData] || ''}
              touched={!!touched[field.id as keyof LoginFormData]}
              error={errors[field.id as keyof LoginFormData] || ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={(id, value) => setFieldValue(id as keyof LoginFormData, value)}
            />
          ))}

          <div className="flex items-center justify-center">
            <button
              className={`${isFormValid ? 'bg-main' : 'bg-gray-600'} focus:shadow-outline mt-10 w-5/6 rounded py-2 font-bold text-white hover:bg-gray-700 focus:outline-none`}
              type="submit"
              disabled={!isFormValid}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
