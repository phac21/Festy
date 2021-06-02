import Company from '../models/company';
import imagesView from './images_view';

export default {
    render(company: Company) {
        return {
            id: company.id,
            name: company.name,
            latitude: company.latitude,
            longitude: company.longitude,
            about: company.about,
            instructions: company.instructions,
            opening_hours: company.opening_hours,
            open_on_weekends: company.open_on_weekends,
            images: imagesView.renderMany(company.images)
        };
    },
    renderMany(companies: Company[]) {
        return companies.map(company => this.render(company));
    }
}