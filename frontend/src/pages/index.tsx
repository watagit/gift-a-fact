import { FC } from 'react';
import Item from '../components/Item';

const items = [
  "bouquet_birthday.png",
  "game_ken_seiken.png",
  "pet_cat_sit.png",
  "sushi_kai_hokkigai.png",
  "sweets_cake_rousoku.png"
];

const TopPage: FC = () => {
  return (
    <>
      <div>
        {items.map((item, i) => (
          <Item key={i} img={item} />
        ))}
      </div>
    </>
  );
};

export default TopPage;
