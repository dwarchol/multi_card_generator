import { Component, Input } from '@angular/core';
import { Competition } from '../competition';
import { Competitor } from '../competitor';
import { EventElement } from '../event-element';
@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css']
})
export class CardsViewComponent {
  @Input() compId: string;
  group = "";
  round = 1;
  attempts: number;
  compInfo: Competition;
  multiCompetitors: Array<Competitor>;
  ngOnInit(){
    this.getData()
  }
  getData(){
    Promise.all([fetch(`https://www.worldcubeassociation.org/api/v0/competitions/${this.compId}/wcif/public`)
      .then(r => r.json()), fetch(`https://www.worldcubeassociation.org/api/v0/competitions/${this.compId}`)
        .then(r => r.json())])
      .then(res => {
        this.compInfo = res[0]
        this.attempts = this.compInfo.events.find( (ev: EventElement) => ev.id == "333mbf").rounds[0].format;
        console.log(this.compInfo)

        var persons = this.compInfo.persons
        console.log(persons)
        this.multiCompetitors = persons.filter(person => person.registrantId && person.registration.eventIds.includes("333mbf"));
        console.log(this.multiCompetitors)
      })
  }

}
