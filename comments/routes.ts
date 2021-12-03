import { Router } from 'express';
import { isValidBody } from '../middlewares/isValidQuery';
import {
    createComment,
    getAllComment,
    getComment,
    getOneComment,
} from './controllers';
import { commentBodySchema } from './schema';

const router = Router();

router.get('/', getAllComment);

router.get('/:id', getOneComment);

router.post('/create', isValidBody(commentBodySchema), createComment);

router.get('/comment/:id', getComment);

export default router;
