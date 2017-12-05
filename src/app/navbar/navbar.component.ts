import { GameService } from '../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'res-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public game: GameService) { }

  public ngOnInit() {
  }

}
