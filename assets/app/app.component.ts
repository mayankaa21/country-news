import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // username: string ;
  // logArray= [];
  // buttonClick: boolean = false;
  i: number = 0;
  recipePage: boolean = false;
  shoppingPage: boolean = false;

  // onButtonClick(){
  //   this.username = null;
  // }
  // onButtonTap(){
  //   this.buttonClick = !this.buttonClick;
  //   this.logArray.push(this.logArray.length + 1);
  // }

  onHeaderEventFired(finalValue){
    if (finalValue === 'Recipe') {
      this.recipePage = true;
      this.shoppingPage = false;
    } else {
      this.shoppingPage = true;
      this.recipePage = false;
    }
  }
}
