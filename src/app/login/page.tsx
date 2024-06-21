'use client';

import React from 'react';
import InputField from '@/components/layout/InputField';
import useForm from '@/hooks/useForm';
import { LoginValidation } from '@/lib/utils';
import { FormData } from '@/lib/types';
import { loginInputFields } from '@/lib/data';

function LoginPage() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useForm({
    initialValues: {
      userId: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
    validate: LoginValidation,
  });

  const isFormValid = Object.values(values).every(value => value !== '') &&
                      Object.keys(errors).length === 0;

  return (
    <div className="relative flex justify-center items-center h-screen overflow-y-auto w-screen text-white bg-black">
      <div className="w-full max-w-md px-4 py-8 z-20">
        <div className="w-5/6 mx-auto">
          <h2 className="text-2xl font-bold mt-0 mb-8 text-left">로그인</h2>
        </div>
        <form className="bg-transparent" onSubmit={handleSubmit}>
          {loginInputFields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={values[field.id as keyof FormData]}
              touched={!!touched[field.id as keyof FormData]}
              error={errors[field.id as keyof FormData] || ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
          ))}

          <div className="flex items-center justify-center">
            <button
              className={`${isFormValid ? 'bg-main' : 'bg-gray-600'} mt-10 hover:bg-gray-700 text-white font-bold py-2 w-5/6 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
              disabled={!isFormValid}
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;