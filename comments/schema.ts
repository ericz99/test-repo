import { Schema } from 'jsonschema';

export const commentBodySchema: Schema = {
  type: 'object',
  properties: {
    postId: {
      type: 'number',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    }
  }
};
