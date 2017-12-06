import { Component }from'@angular/core';
import { DataServices } from '../../services/data.services';

@Component({
    selector:'sandbox',
    template:`
  <form (submit)="onSubmit()">
    <label>Name</label>
    <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
    <label>E-mail</label>
    <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
    <label>Phone No</label>
    <input type="text" class="form-control" [(ngModel)]="user.phone" name="Phone No">
    <input type="submit" class="btn btn-success" value="submit">
    </form>
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
users:any[];
user={
   name:'',
   email:'',
   phone:''
}
constructor(public dataService:DataServices)
{
  this.dataService.getUsers().subscribe(users=>{
    //console.log(users);
    this.users=users;
  });
}
  onSubmit(){
     this.dataService.addUser(this.user).subscribe(user => {
       console.log(user);
       this.users.unshift(user);
     });
 }  
}