'use client'
import React, { useState } from 'react';
import Dropdown from '@/components/layout/Dropdown';

const inputFields = [
  { id: 'name', type: 'text', placeholder: '이름', maxLength: 10 },
  { id: 'username', type: 'text', placeholder: '아이디', maxLength: 12 },
  { id: 'password', type: 'password', placeholder: '비밀번호' },
  { id: 'confirmPassword', type: 'password', placeholder: '비밀번호 확인' }
];

const teamOptions = ['비트버디', '아지토', '커플로그', '티그', '펫플레이트'];
const departmentOptions = ['기획', '디자인', '프론트엔드', '백엔드'];

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    team: '',
    department: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEmailVerification = () => {
    // 이메일인증.....설마 메일전송!!?!?!???! ㄷㄷ
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-y-auto w-screen text-white bg-black">
      <div className="w-full max-w-md px-4 py-8">
        <div className="w-5/6 mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-left">회원 가입</h2>
        </div>
        <form className="bg-transparent">
          {inputFields.map(field => (
            <div key={field.id} className="mb-5 w-5/6 mx-auto">
              <input
                className="w-full bg-transparent border-b-2 border-gray-600 py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-main"
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleChange}
                maxLength={field.maxLength || undefined}
              />
            </div>
          ))}

          {/* 이메일 부분 */}
          <div className="mb-5 w-5/6 mx-auto flex items-center">
            <input
              className="flex-grow bg-transparent border-b-2 border-gray-600 py-1 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-main"
              id="email"
              type="email"
              placeholder="이메일 주소"
              value={formData.email}
              onChange={handleChange}
            />
            <button
              className="ml-2 bg-gray-600 hover:bg-gray-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleEmailVerification}
            >
              인증
            </button>
          </div>
          <div className="mb-5 w-5/6 mx-auto flex justify-between relative space-x-4">
          
          {/* 드롭다운 부분 */}
            <Dropdown 
              label="팀 선택" 
              options={teamOptions} 
              selectedOption={formData.team} 
              setSelectedOption={(value) => setFormData({ ...formData, team: value })} 
            />
            <Dropdown 
              label="파트 선택" 
              options={departmentOptions} 
              selectedOption={formData.department} 
              setSelectedOption={(value) => setFormData({ ...formData, department: value })} 
            />
          </div>
          
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 w-5/6 rounded focus:outline-none focus:shadow-outline"
              type="button"
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
