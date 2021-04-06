import { FC } from 'react';

export interface Props {
  label: string;
  placeholder: string;
}

const TextField: FC<Props> = ({ label, placeholder }) => {
  return (
    <div>
      <div>{label}</div>
      <input placeholder={placeholder} />
    </div>
  );
};

export default TextField;
