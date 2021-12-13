/* eslint-disable import/no-named-as-default-member */
import sinon from 'sinon';
import { assert } from 'chai';
import { ExegesisContext } from 'exegesis-express';

const postController = require('../controllers/postController');

describe('PostController', () => {
  const fakeData = {
    data: [
      {
        userId: 0,
        id: 0,
        body: 'some body',
        title: 'some title'
      }
    ],
    post: {
      userId: 0,
      id: 0,
      body: 'some body',
      title: 'some title'
    }
  };

  const fakeContext = {
    params: {
      path: {
        id: 1
      }
    },
    res: {
      status: sinon.stub().returns({ end: sinon.spy() }),
      json: sinon.spy()
    }
  } as unknown as ExegesisContext;

  it('should get all post', async () => {
    const stub = sinon
      .stub(postController, 'getAllPost')
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

  it('should get one post by id', async () => {
    const stub = sinon
      .stub(postController, 'getOnePost')
      .withArgs(fakeContext)
      .callsFake(async () => {
        return fakeData.post;
      });

    // restore stub
    sinon.restore();
    assert.equal(await stub(fakeContext), fakeData.post);
  });
});
