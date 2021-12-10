import { ExegesisContext } from 'exegesis-express';

import { getAllData, getOneData } from '../services/postService';

interface PathParams {
  id: string;
}

exports.getAllPost = async (context: ExegesisContext) => {
  try {
    const data = await getAllData();
    return context.res.status(200).json({ data });
  } catch (e) {
    throw context.makeError(500, 'Failed to get all post');
  }
};

exports.getOnePost = async (context: ExegesisContext) => {
  try {
    const { id } = context.params.path as PathParams;
    const post = await getOneData(id);
    if (!post) {
      throw context.makeError(404, 'No post found!');
    }
    return context.res.json({ post });
  } catch (e) {
    throw context.makeError(500, 'Failed to get all post');
  }
};
