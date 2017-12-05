import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Injectable()
export class GameLoadedGuard implements CanActivate {

    constructor(private game: GameService, private router: Router) {}

    public canActivate() {
        if (this.game.info && this.game.info.name.length > 0) {
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}
