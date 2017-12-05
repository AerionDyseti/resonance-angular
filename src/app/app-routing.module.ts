import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './routes/error404/error404.component';
import { HomeComponent } from './routes/home/home.component';
import { PlayersComponent } from './routes/players/players.component';
import { GameComponent } from './routes/game/game.component';

import { GameLoadedGuard } from './guards/game-loaded.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent, canActivate: [GameLoadedGuard] },
  { path: 'game', component: GameComponent, canActivate: [GameLoadedGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
