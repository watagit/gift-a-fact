import { FC } from 'react';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';

const Index: FC = () => {
  return (
    <>
      <TextField label={"label"} placeholder={"placeholder"} />
      <TextArea label={"label"} placeholder={"placeholder"} />
    </>
  );
};

export default Index;
