import { MutableRefObject } from 'react';

export const handleClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  setIsOpen: (isOpen: boolean) => void
) => (event: MouseEvent) => {
  if (ref.current && !ref.current.contains(event.target as Node)) {
    setIsOpen(false);
  }
};

//유효성검사 함수도 추가