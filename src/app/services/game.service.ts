import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

import { GameInfo } from '../models/game-info';
import { Player } from '../models/player';
import { GameFile } from '../models/game-file';

import { mockPlayerList } from '../../../mocks/player.mock';
import { mockGameInfo } from '../../../mocks/game.mocks';

@Injectable()
export class GameService {

  constructor(public router: Router) { }

  public info: GameInfo;
  public players: Player[];

  public newGameFile(): void {
    this.info = new GameInfo();
    this.players = [];
  }

  public loadMockGame(): void {
    this.info = mockGameInfo;
    this.players = mockPlayerList;
  }

  public loadGameFile(event): void {
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
          this.router.navigateByUrl('/home');
        }
      };
      reader.readAsText(input.files[index]);
    }
  }

  public saveGameFile(): void {
    const gameFile: GameFile = new GameFile(this.info, this.players);
    saveAs(new Blob([JSON.stringify(gameFile)], { type: 'application/json;charset=utf-8' }), `${this.info.name}.res.json`);
  }

  public closeGameFile(): void {
    this.info = null;
    this.players = null;
    this.router.navigateByUrl('/home');
  }




}
