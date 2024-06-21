export interface DropdownProps {
    label: string;
    options: string[];
    selectedOption: string;
    setSelectedOption: (value: string) => void;
  }
  
  export interface FormData {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    team: string;
    department: string;
  }