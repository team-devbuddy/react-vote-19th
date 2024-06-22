export const inputFields = [
  { id: 'name', type: 'text', placeholder: '이름', maxLength: 10 },
  { id: 'userId', type: 'text', placeholder: '아이디', maxLength: 12 },
  { id: 'password', type: 'password', placeholder: '비밀번호' }
];

export interface TeamOption {
  id: number;
  name: string;
}

export const teamOptions: TeamOption[] = [
  { id: 1, name: '비트버디' },
  { id: 2, name: '아지토' },
  { id: 3, name: '커플로그' },
  { id: 4, name: '티그' },
  { id: 5, name: '펫플레이트' },
];

export const departmentOptions = ['기획', '디자인', '프론트엔드', '백엔드'];

export const loginInputFields = [
  { id: 'userId', type: 'text', placeholder: '아이디' },
  { id: 'password', type: 'password', placeholder: '비밀번호' }
];
