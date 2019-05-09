import { DatePipe } from "@angular/common";
import { Game } from '../../game/game';
import { Location } from '../../user/user';
export interface EventState {
    currentEventId: string;
    date: Date;
    name: string;
    games: Array <Game>
    host: string;
    location: Location;
}