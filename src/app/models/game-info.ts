import { GameSettings } from './game-settings';

export class GameInfo {
    public id: string;
    public name: string;
    public description: string;
    public website: string;
    public email: string;
    public gameDates: Date[];
    public settings: GameSettings;

    constructor(id: string = 'NEWGAME', name: string = 'Untitled Game', description: string = '', website?: string, email?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.website = website;
        this.email = email;
        this.gameDates = [];
        this.settings = { byTheBook: true };
    }
}
