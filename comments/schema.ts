import { Schema } from 'jsonschema';

export const commentBodySchema: Schema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        data: {
            type: 'string',
        },
    },
    required: ['data'],
};
