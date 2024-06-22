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

  const resetForm = (newValues: T) => {
    setValues(newValues);
    setErrors({});
    setTouched({});
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
    resetForm,
    setErrors,
  };
}
