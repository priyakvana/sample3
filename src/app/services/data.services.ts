import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataServices{
    data: Observable<Array<number>>;
    constructor(){

    }
    getData(){
        this.data = new Observable(observer => { 
        setTimeout(()=>{
            observer.next('Hello');
        },1000);
        setTimeout(()=>{
            observer.next(1); 
        },2000);

        setTimeout(()=>{
            observer.next(2); 
        },3000);
        setTimeout(()=>{
            observer.next(3); 
        },4000);
        setTimeout(()=>{
            observer.next('Thank You'); 
        },6000);
        setTimeout(()=>{
            observer.complete(); 
        },8000);
    });
    return this.data;
    } 
}