import axios from 'axios';

interface Data {
  userId: number;
  id: number;
  body: string;
  title: string;
}

export const getAllData = async () => {
  const { data } = await axios.get<Data[]>('https://test-logicloud.s3.us-west-2.amazonaws.com/data.json');
  return data;
};

export const getOneData = async (id: string) => {
  const { data } = await axios.get<Data[]>('https://test-logicloud.s3.us-west-2.amazonaws.com/data.json');
  const post = data.find((p) => p.id === Number(id));
  return post;
};
