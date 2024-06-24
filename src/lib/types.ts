export interface LoginFormData {
  userId: string;
  password: string;
}
export const initialLoginValues: LoginFormData = {
  userId: '',
  password: '',
};

export interface FormData {
  name: string;
  userId: string;
  password: string;
  confirmPassword: string;
  email: string;
  team: string;
  department: string;
}
export const initialFormData: FormData = {
  name: '',
  userId: '',
  password: '',
  confirmPassword: '',
  email: '',
  team: '',
  department: '',
};

export interface DropdownProps {
  label: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  touched: boolean;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleClear: (id: string, value: string) => void;
}
