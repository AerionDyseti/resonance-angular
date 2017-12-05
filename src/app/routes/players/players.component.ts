import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';


@Component({
  selector: 'res-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(public game: GameService) { }

  public ngOnInit() {
  }

  public editPlayer(player) {
    alert(JSON.stringify(player));
  }

}
