import { Competitor } from "./competitor";
import { EventElement } from "./event-element";

export class Competition {
    id: string;
    competitorLimit: number;
    name: string;
    shortName: string;
    events: Array<EventElement>;
    persons: Array<Competitor>;
}
