import { GameInfo } from '../src/app/models/game-info';

export const mockGameInfo: GameInfo = {
    id: 'GAME001',
    name: 'San Marcos Sabbat',
    email: 'sc.austin.sabbat@gmail.com',
    description: 'The Sabbat venue run for the Mind\'s Eye Society domain in Austin, TX. (TX-065 - No Witnesses)',
    gameDates: ['12/30/2017', '01/27/2018', '02/24/2018', '03/24/2018'],
    website: 'https://www.facebook.com/groups/528606193986630/',
    settings: {
        rumors: {
            publicKnowledge: true,
            sectFaction: false,
            clanTribe: false
        }
    }
};
