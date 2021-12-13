/* eslint-disable import/no-named-as-default-member */
import sinon from 'sinon';
import { assert } from 'chai';
import { ExegesisContext } from 'exegesis-express';

const commentController = require('../controllers/commentController');

describe('CommentController', () => {
  const fakeData = {
    data: [
      {
        id: 0,
        postId: 0,
        body: 'some body',
        name: 'some name',
        email: 'test@yahoo.com'
      }
    ],
    comment: {
      id: 0,
      postId: 0,
      body: 'some body',
      name: 'some name',
      email: 'test@yahoo.com'
    },
    resp: {
      status: 'success',
      data: {
        postId: 1,
        body: 'some body',
        name: 'some name',
        email: 'test123@yahoo.com'
      }
    }
  };

  const fakeContext = {
    params: {
      path: {
        id: 0
      }
    },
    req: {
      body: fakeData.resp.data
    },
    res: {
      status: sinon.stub().returns({ end: sinon.spy() }),
      json: sinon.spy()
    },
    makeError: (_status: number, message: string) => {
      throw new Error(message);
    }
  } as unknown as ExegesisContext;

  it('should get all comment', async () => {
    const stub = sinon
      .stub(commentController, 'getAllComment')
      .withArgs(fakeContext)
      .callsFake(async () => {
        return fakeData.data;
      });

    // restore stub
    sinon.restore();
    // recall the method ? maybe you dont have to
    // assert.equal and check if both result is the same
    assert.equal(await stub(fakeContext), fakeData.data);
  });

  it('should get one comment by id', async () => {
    const stub = sinon
      .stub(commentController, 'getOneComment')
      .withArgs(fakeContext)
      .callsFake(async () => {
        return fakeData.comment;
      });

    // restore stub
    sinon.restore();
    assert.equal(await stub(fakeContext), fakeData.comment);
  });

  it('should create a comment', async () => {
    const stub = sinon
      .stub(commentController, 'createComment')
      .withArgs(fakeContext)
      .callsFake(async () => {
        return fakeData.resp;
      });

    sinon.restore();
    assert.equal(await stub(fakeContext), fakeData.resp);
  });

  // it('should throw an error if comment not found', async () => {
  //   const stub = sinon.stub(commentController, 'getOneComment').withArgs(fakeContext).rejects(new Error('No comment found!'));
  //   sinon.restore();
  //   assert.equal(await stub(fakeContext).message, 'No comment found!');
  // });
});
