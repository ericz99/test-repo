import { ExegesisContext } from 'exegesis-express';

import { getAllData, getOneData, createCommentData, getCommentData } from '../services/commentService';

interface PathParams {
  id: string;
}

interface PostBody {
  postId: number;
  body: string;
  name: string;
  email: string;
}

exports.getAllComment = async (context: ExegesisContext) => {
  try {
    const data = await getAllData();
    return context.res.status(200).json({
      data: data
    });
  } catch (e) {
    throw context.makeError(500, 'Failed to get all comments');
  }
};

exports.getOneComment = async (context: ExegesisContext) => {
  const { id } = context.params.path as PathParams;
  const comment = await getOneData(id);
  if (!comment) {
    throw context.makeError(404, 'No comment found!');
  }
  return context.res.json({ comment });
};

exports.getOneComments = async (context: ExegesisContext) => {
  try {
    const { id } = context.params.path as PathParams;
    const foundComment = await getCommentData(id);
    return context.res.status(200).json({
      status: 200,
      data: foundComment
    });
  } catch (e) {
    throw context.makeError(500, 'Failed to get a comment');
  }
};

exports.createComment = async (context: ExegesisContext) => {
  try {
    const bodyData = context.req.body as PostBody;
    // # set data to redis
    const data = await createCommentData({ data: bodyData });
    // return response
    return context.res.status(200).json({
      status: 'success',
      data: data
    });
  } catch (e) {
    throw context.makeError(500, 'Failed to create a comment');
  }
};
