import { Component }from'@angular/core';

@Component({
    selector:'sandbox',
    template:
   ` <h1> Hello </h1>
   <div><img src="{{ imageUrl1 }}"> </div>
   <div><img [src]=" imageUrl2"> </div>
   <div><img bind-src="imageUrl3"> </div>
   <div><img src="{{ imageUrl }}"> </div>
   <hr>
   <h2>create post</h2>
   <p [hidden]="isUnchanged">post has been changed,please save</p>
   <button [disabled]="isUnchanged">save</button>
   
   `
})
export class SandboxComponent{
  imageUrl1='assets/images/image22.jpg';
  imageUrl2='assets/images/image33.jpg';
  imageUrl3='assets/images/image44.jpg'
  isUnchanged:boolean=false;
}