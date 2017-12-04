import { mockPlayerList } from '../../../mocks/player.mock';
import { mockGameInfo } from '../../../mocks/game.mocks';
import { GameInfo } from '../models/game-info';
import { Player } from '../models/player';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { GameFile } from '../models/game-file';

@Injectable()
export class GameService {

  constructor() { }

  info: GameInfo;
  players: Player[];

  newGameFile(): void {
    this.info = new GameInfo();
    this.players = [];
  }

  loadMockGame(): void {
    this.info = mockGameInfo;
    this.players = mockPlayerList;
  }

  loadGameFile(event): void {
    // TODO: load from a saved file.
    const input = event.target;
    for (let index = 0; index < input.files.length; index++) {
      const reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        const text = reader.result;
        try {
          const game = JSON.parse(text);
          this.info = game.info;
          this.players = game.players;
        }
        catch (e) {
          alert('There was an error loading the game file: ' + e.message);
        }
      };
      reader.readAsText(input.files[index]);
    }
  }

  saveGameFile(): void {
    const gameFile: GameFile = new GameFile(this.info, this.players);
    saveAs(new Blob([JSON.stringify(gameFile)], { type: 'application/json;charset=utf-8' }), `${this.info.name}.res.json`);
  }

  closeGameFile(): void {
    this.info = null;
    this.players = null;
  }




}
