export const inputFields = [
  { id: 'name', type: 'text', placeholder: '이름', maxLength: 10 },
  { id: 'userId', type: 'text', placeholder: '아이디', maxLength: 12 },
  { id: 'password', type: 'password', placeholder: '비밀번호' },
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

export const departmentOptions = ['BACKEND', 'FRONTEND'];

export const loginInputFields = [
  { id: 'userId', type: 'text', placeholder: '아이디' },
  { id: 'password', type: 'password', placeholder: '비밀번호' },
];

export const FrontPartData = [
  {
    index: 0,
    name: '김동혁',
    team: '비트버디',
  },
  {
    index: 1,
    name: '김수현',
    team: '비트버디',
  },
  {
    index: 2,
    name: '조유담',
    team: 'AZITO',
  },
  {
    index: 3,
    name: '이나현',
    team: 'AZITO',
  },
  {
    index: 4,
    name: '안혜연',
    team: '커플로그',
  },
  {
    index: 5,
    name: '김민영',
    team: '커플로그',
  },
  {
    index: 6,
    name: '김다희',
    team: '펫플레이트',
  },
  {
    index: 7,
    name: '이지인',
    team: '펫플레이트',
  },
  {
    index: 8,
    name: '김승완',
    team: 'TIG',
  },
  {
    index: 9,
    name: '송은수',
    team: 'TIG',
  },
];
