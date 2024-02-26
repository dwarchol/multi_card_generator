import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() compName: string;
  @Input() numberOfAttempts: number;
  @Input() name: string;
  @Input() id: number;
  @Input() round: number;
  @Input() group: boolean;
  arr = [];

  ngOnInit(){
    console.log(this.numberOfAttempts)
    for (let i = 0; i < this.numberOfAttempts; i++) {
      this.arr.push(i+1);
    }
  }
}
