import { Game } from '../game/game';

export interface Event {
    currentEventId: string | null; 
    date: Date;
    name: string;
    games: Array <Game>
    host: string;
    location: Location | null;
}