export interface LoginFormData {
  userId: string;
  password: string;
}

export interface FormData {
  name: string;
  userId: string;
  password: string;
  confirmPassword: string;
  email: string;
  team: string;
  department: string;
}

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


export interface ErrorModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}