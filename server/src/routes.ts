import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import CompaniesController from './controllers/CompaniesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/companies', CompaniesController.Index);
routes.get('/companies/:id', CompaniesController.show);
routes.post('/companies', upload.array('images'), CompaniesController.create);


export default routes;