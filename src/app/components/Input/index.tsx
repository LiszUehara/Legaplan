// components/InputWithLabel.tsx
import React from 'react';
import  './styles.scss';

type InputWithLabelProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, type="text", value, onChange, placeholder }) => {
  return (
    <div className={'container'}>
      <label className={'label'}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={'input'}
      />
    </div>
  );
};

export default InputWithLabel;
