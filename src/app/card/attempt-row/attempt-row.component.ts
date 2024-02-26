import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attempt-row',
  templateUrl: './attempt-row.component.html',
  styleUrls: ['./attempt-row.component.css']
})
export class AttemptRowComponent {
  @Input() number: string;
}
