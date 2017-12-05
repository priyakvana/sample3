import { Component }from'@angular/core';
import { DataServices } from '../../services/data.services';
@Component({
    selector:'sandbox',
    template:`
    <h1>Hello world</h1>
    <ul class ="list-group">
    <li class="list-group-item" *ngFor="let user of users">{{user}}</li>
    </ul>
   `  
})
export class SandboxComponent{
  users:string[];
constructor(public dataService:DataServices)

{
this.users=this.dataService.getUsers();
}
  
}