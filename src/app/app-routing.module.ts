import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './routes/home/home.component';
import { PlayersComponent } from './routes/players/players.component';
import { GameComponent } from './routes/game/game.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
