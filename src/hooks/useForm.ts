import { useState, useEffect } from 'react';
import { FormData } from '@/lib/types';

interface UseFormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validate: (values: T) => Partial<T>;
}

export function useForm<T>({ initialValues, onSubmit, validate }: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched({
      ...touched,
      [id]: true,
    });
  };

  const setFieldValue = (id: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
    setTouched((prevTouched) => ({ ...prevTouched, [id]: true }));
  };

  const resetForm = (newValues: T) => {
    setValues(newValues);
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      const hasErrors = Object.values(validationErrors).some((error) => error);
      if (hasErrors) return;
    }
    onSubmit(values);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue: handleClear,
  };
}
