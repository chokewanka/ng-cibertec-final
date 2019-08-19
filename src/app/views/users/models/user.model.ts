import Experience from './experience.model';

export default class User{
    id?: number;
    name: string;
    job: string;
    age: number;
    phone: string;
    email: string;
    experiences?: Array<Experience>;

    constructor(){
    }
}