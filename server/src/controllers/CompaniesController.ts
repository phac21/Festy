import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import companyView from '../views/comapnies_view'

import Company from '../models/company';

export default {
    async Index(request: Request, response: Response){
        const companiesRepository = getRepository(Company);

        const companies = await companiesRepository.find({
            relations: ['images']
        });

        return response.json(companyView.renderMany(companies));
    },
    async show(request: Request, response: Response){
        const { id } = request.params;

        const companiesRepository = getRepository(Company);
        
        const company = await companiesRepository.findOneOrFail(id, {
            relations: ['images']
        });
        
        return response.json(companyView.render(company));
    },
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
    
        const companiesRepository = getRepository(Company);

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })
    
        const company = companiesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });
    
       await companiesRepository.save(company);
    
        return response.status(201).json(company);
    }
}