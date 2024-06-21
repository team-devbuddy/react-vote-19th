import { useState, useEffect } from 'react';
import { ValidationProps } from '@/lib/utils/types';
import { SignUpValidation } from '@/lib/utils/SignUpValidation';

interface UseFormProps {
  initialValues: ValidationProps;
  onSubmit: (values: ValidationProps) => void;
  validate: (values: ValidationProps) => ValidationProps;
}

export default function useForm({ initialValues, onSubmit, validate }: UseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ValidationProps>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setTouched({ ...touched, [id]: true });
    setErrors(validate(values));
  };

  const setFieldValue = (id: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
    setTouched((prevTouched) => ({ ...prevTouched, [id]: true }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await onSubmit(values);
    }
    setIsLoading(false);
  };

  return {
    values,
    errors,
    touched,
    isLoading,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setErrors,
  };
}
