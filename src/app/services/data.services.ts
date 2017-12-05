import {Injectable} from '@angular/core';
@Injectable()
export class DataServices{
    users:string[];
      
    constructor(){
        this.users=['mark','sharon','beth','john'];
    }
    getUsers(){
        return this.users;
    }
}