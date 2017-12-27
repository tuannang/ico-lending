import { Tags } from './mock-tags';

export class Project {
    id: number;
    name: string;
    short_des: string;
    is_pre_sale: boolean;
    image_url: string;
    interest: string;
    category_type: string;
    category_name: string;
    goal: string;
    start_date: string;
    end_date: string;
    tags: Tags;
    is_rated: boolean;
}
