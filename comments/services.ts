import axios from 'axios';

interface Data {
  postId: number;
  id: number;
  body: string;
  name: string;
  email: string;
}

export const getAllData = async () => {
  const { data } = await axios.get<Data[]>('https://jsonplaceholder.typicode.com/comments');
  return data;
};

export const getOneData = async (id: string) => {
  const data = await getAllData();
  const post = data.find((p) => p.id === Number(id));
  return post;
};
