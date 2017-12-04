import { Component }from'@angular/core';

@Component({
    selector:'sandbox',
    template:`
    <h1>Hello world</h1>
   <input type="text"(click)="fireEvent($event)" placeholder="click" value={{text}} (keypress)="changeEvent($event)">
   <h2>{{text}}</h2>
   ` 
})
export class SandboxComponent{
  text:string='hello';
fireEvent(e){
  console.log(e.type);
  }
  changeEvent(e){
    this.text= e.target.value;
  }

}