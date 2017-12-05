import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';


@Component({
  selector: 'res-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public game: GameService) { }

  public ngOnInit() {
  }

}
