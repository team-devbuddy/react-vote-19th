import { ValidationProps } from './types';

export const handleClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  setIsOpen: (isOpen: boolean) => void
) => (event: MouseEvent) => {
  if (ref.current && !ref.current.contains(event.target as Node)) {
    setIsOpen(false);
  }
}; 

//유효성검사 함수
export const SignUpValidation = (values: ValidationProps): ValidationProps => {
    const errors: ValidationProps = {};
  
    if (!values.name) {
      errors.name = '이름이 입력되지 않았습니다.';
    } else if (!/^[가-힣a-zA-Z][^\s]{0,9}$/.test(values.name)) {
      errors.name = '이름은 10자 이내로 공백 없이, 한글이나 영어로 시작해야 합니다.';
    }
  
    if (!values.email) {
      errors.email = '이메일이 입력되지 않았습니다.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = '입력된 이메일이 유효하지 않습니다.';
    }
  
    if (!values.username) {
      errors.username = '아이디가 입력되지 않았습니다.';
    } else if (!/^[a-z0-9]{6,12}$/.test(values.username)) {
      errors.username = '아이디는 영어 소문자와 숫자로 6자 이상 12자 이내여야 합니다.';
    }
  
    if (!values.password) {
      errors.password = '비밀번호가 입력되지 않았습니다.';
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/.test(values.password)) {
      errors.password = '비밀번호는 영어, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다.';
    }
  
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }
  
    return errors;
  };
