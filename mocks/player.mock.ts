import { Player } from '../src/app/models/player';

export const mockPlayerList: Player[] = [
    {
        id: 'us2017010003',
        email: 'vvincenzo@fakemail.com',
        isActive: true,
        name: 'Vinny Vincenzo',
        position: [],
        stNotes: 'Likes to punch things.'
    },
    {
        id: 'us2017010002',
        email: 'tthompson@fakemail.com',
        isActive: true,
        name: 'Tammy Thompson',
        position: [],
        stNotes: 'Likes puzzles.'
    },
    {
        id: 'us2017010001',
        email: 'jjohnson@fakemail.com',
        isActive: false,
        name: 'Jimmy Johnson',
        position: [],
        stNotes: 'Loner, doesn\'t really interact wtih plot.'
    }
];
