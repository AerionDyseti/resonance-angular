import { GameInfo } from './game-info';
import { Player } from './player';

export class GameFile {
    public constructor(
        public info: GameInfo,
        public players: Player[]
    ) { }
}
