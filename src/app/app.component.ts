import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi_card_generator';
  compIdInput = "";
  compId;
  generateCards(){
      console.log(this.compIdInput)
      this.compId=this.compIdInput;
  }
}
