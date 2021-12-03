import { NextFunction, Request, Response } from 'express';
import JsonSchema, { Schema } from 'jsonschema';

const validate = JsonSchema.validate;

export const isValidQuery = (schema: Schema) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            // validate schema
            validate(req.query, schema, { throwError: true });
            next();
        } catch (e) {
            next(e);
        }
    };
};

export const isValidBody = (schema: Schema) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            // validate schema
            validate(req.body, schema, { throwError: true });
            next();
        } catch (e) {
            next(e);
        }
    };
};
