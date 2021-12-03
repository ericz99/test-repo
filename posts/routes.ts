import { Router } from 'express';
import { getAllPost, getOnePost } from './controllers';

import { isValidQuery } from '../middlewares/isValidQuery';
import { postQuerySchema } from './schema';

const router = Router();

router.get('/', isValidQuery(postQuerySchema), getAllPost);

router.get('/:id', isValidQuery(postQuerySchema), getOnePost);

export default router;
