import { ChangeEvent, FC } from 'react';

export interface Props {
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<Props> = ({ label, placeholder, onChange }) => {
  return (
    <>
      <div>{label}</div>
      <textarea placeholder={placeholder} onChange={onChange} />
    </>
  );
};

export default TextArea;
