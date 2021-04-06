import { FC } from 'react';
import Image from 'next/image';
import Button from './Button';

export interface Props {
  img: string;
}

const Item: FC<Props> = ({ img }) => {
  return (
    <>
      <div>
        <Image src={img} height={80} width={80} />
      </div>
      <Button label={"選択"} onClick={null} />
    </>
  );
};

export default Item;
