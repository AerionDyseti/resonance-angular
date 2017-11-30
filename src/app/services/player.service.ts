import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Injectable } from '@angular/core';

import { mockPlayerList } from '../../../mocks/player-mocks';
import { Player } from '../models/player';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayerList(): Observable<Player[]> {
    const players = mockPlayerList.filter(p => true); // Or some other filter.
    return of(players);
  }

  getPlayer(id: string): Observable<Player> {
    const player = mockPlayerList.find(p => p.id === id);
    return of(player);
  }

}
