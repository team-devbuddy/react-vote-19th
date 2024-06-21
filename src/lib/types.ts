export interface DropdownProps {
    label: string;
    options: string[];
    selectedOption: string;
    setSelectedOption: (value: string) => void;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
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
  
  export interface ValidationProps {
    name?: string;
    email?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
  }
  