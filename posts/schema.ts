import { Schema } from 'jsonschema';

const postQuerySchema: Schema = {
  type: 'object',
  properties: {
    search: {
      type: 'string'
    },
    location: {
      type: 'string'
    }
  },
  required: ['search']
};

export default postQuerySchema;
