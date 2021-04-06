import { FC } from 'react';

export interface Props {
  label: string;
  placeholder: string;
}

const TextField: FC<Props> = ({ label, placeholder }) => {
  return (
    <>
      <div>{label}</div>
      <input placeholder={placeholder} />
    </>
  );
};

export default TextField;
