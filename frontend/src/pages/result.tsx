import { FC } from 'react';
import Link from 'next/link';

const ResultPage: FC = () => {
  return (
    <>
      <h1>ResultPage</h1>
      <p>送信が完了しました！</p>
      <Link href={'https://www.twitter.com/what_a_pon'}><a>@what_a_pon</a></Link>のツイートに注目してね！
    </>
  );
};

export default ResultPage;
