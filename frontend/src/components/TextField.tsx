import { FC, ChangeEvent } from 'react';

export interface Props {
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({ label, placeholder, onChange }) => {
  return (
    <>
      <div>{label}</div>
      <input placeholder={placeholder} onChange={onChange} />
    </>
  );
};

export default TextField;
