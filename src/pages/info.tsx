import { FC, useCallback, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { db } from '../../firebase/firebase';

const InfoPage: FC = () => {
  const router = useRouter();

  const [presentName, setPresentName] = useState<string>(''),
        [nickName, setNickName] = useState<string>(''),
        [message, setMessage] = useState<string>('');

  const inputPresentName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPresentName(event.target.value);
  }, [setPresentName]);

  const inputNickName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  }, [setNickName]);

  const inputMessage = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }, [setMessage]);

  const handleSubmit = () => {
    console.log(presentName, nickName, message);
    db.collection('presents').add({
      presentName: presentName,
      nickName: nickName,
      message: message
    }).then(() => {
      console.log('saved');
    }).catch(() => {
      console.log('error');
    });
  }

  return (
    <>
      <Image src={`/img/${router.query.img}`} height={80} width={80} />
      <TextField label={"プレゼント名"} placeholder={"とびっきりのプレゼント"} onChange={inputPresentName} />
      <TextField label={"ニックネーム"} placeholder={"名無しの権兵衛"} onChange={inputNickName} />
      <TextArea label={"メッセージ"} placeholder={"おめでとう！"} onChange={inputMessage} />

      <Button label={"送信する"} onClick={handleSubmit} />
    </>
  );
};

export default InfoPage;
