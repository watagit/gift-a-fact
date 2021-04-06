import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from './Button';

export interface Props {
  img: string;
}

const Item: FC<Props> = ({ img }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/info',
      query: { img: img },
    });
  }

  return (
    <>
      <div>
        <Image src={`/img/${img}`} height={80} width={80} />
      </div>
      <Button label={"選択"} onClick={handleClick} />
    </>
  );
};

export default Item;
