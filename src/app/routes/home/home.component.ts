import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';


@Component({
  selector: 'res-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public game: GameService) { }

  public ngOnInit() {
  }

}
