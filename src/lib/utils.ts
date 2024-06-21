import { FormData } from './types';

export const handleClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  setIsOpen: (isOpen: boolean) => void
) => (event: MouseEvent) => {
  if (ref.current && !ref.current.contains(event.target as Node)) {
    setIsOpen(false);
  }
};

export const SignUpValidation = (values: FormData): Partial<FormData> => {
  const errors: Partial<FormData> = {};

  if (!values.name) {
    errors.name = '사용하실 이름을 입력해주세요.';
  } else if (!/^[가-힣a-zA-Z][^\s]{0,9}$/.test(values.name)) {
    errors.name = '한글이나 영어로 시작하는 10자 이내의 이름이어야 해요.';
  }

  if (!values.email) {
    errors.email = '이메일을 입력해주세요.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '유효하지 않은 이메일이에요.';
  }

  if (!values.username) {
    errors.username = '아이디를 입력해주세요.';
  } else if (!/^[a-z0-9]{6,12}$/.test(values.username)) {
    errors.username = '영어 소문자와 숫자를 조합하여 6자 이상 12자 이내여야 해요.';
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/.test(values.password)) {
    errors.password = '영어, 숫자, 특수문자를 조합하여 8자 이상이어야 해요.';
  }

  if (values.password && !values.confirmPassword) {
    errors.confirmPassword = '한번 더 입력해주세요!';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = '비밀번호가 일치하지 않아요.';
  }

  if (!values.team) {
    errors.team = '팀을 선택해주세요.'; //출력안해도.......
  }

  if (!values.department) {
    errors.department = '파트를 선택해주세요.';
  }

  return errors;
};
 
