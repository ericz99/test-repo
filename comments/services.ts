import axios from 'axios';
import Comments from '../models/comments';

interface Data {
  postId: number;
  id: number;
  body: string;
  name: string;
  email: string;
}

interface PostBody {
  postId: number;
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

export const getCommentData = async (id: string) => {
  const foundComment = await Comments.findOne({ where: { id: id } });

  if (foundComment === null) {
    throw new Error('No comment found!');
  }

  return foundComment;
};

export const createCommentData = async <T extends { data: PostBody }>(obj: T) => {
  // # set data to redis, ttl = 1day
  // await client.set(
  //     obj.id,
  //     JSON.stringify({ ...obj }),
  //     'PX',
  //     1000 * 60 * 60 * 24
  // );

  // # create new comments data
  const comment = await Comments.create({
    postId: obj.data.postId,
    name: obj.data.name,
    email: obj.data.email,
    body: obj.data.body
  });

  return comment;
};
