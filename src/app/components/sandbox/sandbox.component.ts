import { Component }from'@angular/core';
import { DataServices } from '../../services/data.services';
@Component({
    selector:'sandbox',
    template:`

    <ul class="list-group">
    <li class ="list-group-item" *ngFor="let d of data">{{d}}
    </li>
    </ul>
 
   `  
})
export class SandboxComponent{
data:any[]= [];
constructor(public dataService:DataServices)
{
  console.log(this.dataService.getData());
  this.dataService.getData().subscribe(data=>
  {
   // console.log(data);
   this.data.push(data);
   ;
  })
}
  
}