import express from 'express';
import { exhibitionsPage } from '../controllers';
const exhibitionsRouter = express.Router();

exhibitionsRouter.get('/', exhibitionsPage);

export default exhibitionsRouter;