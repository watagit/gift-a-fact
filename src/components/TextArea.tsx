import { FC } from 'react';

export interface Props {
  label: string;
  placeholder: string;
}

const TextArea: FC<Props> = ({ label, placeholder }) => {
  return (
    <>
      <div>{label}</div>
      <textarea placeholder={placeholder} />
    </>
  );
};

export default TextArea;
