import { Component }from'@angular/core';
import { DataServices } from '../../services/data.services';

@Component({
    selector:'sandbox',
    template:`
    <div *ngFor="let user of users">
    <div class="container jumbotron" style="background:pink; !important">
    <ul class="list-group">
    <li >Name:{{user.name}}</li>
    <li >Email:{{user.email}}</li>
    <li >Phone No:{{user.phone}}</li>
    </ul>
    <br>
    </div>
    </div>
   `  
})
export class SandboxComponent{
users:any[]= [];
constructor(public dataService:DataServices)
{
  this.dataService.getUsers().subscribe(users=>{
    //console.log(users);
    this.users=users;
  });
 
}
  
}