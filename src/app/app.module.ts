import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgUploaderModule } from 'ngx-uploader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { Error404Component } from './common/error404/error404.component';
import { PlayersComponent } from './routes/players/players.component';
import { HomeComponent } from './routes/home/home.component';
import { GameComponent } from './routes/game/game.component';

import { GameService } from './services/game.service';
import { GameLoadedGuard } from './guards/game-loaded.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
    HomeComponent,
    PlayersComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgUploaderModule
  ],
  providers: [
    GameService,
    GameLoadedGuard
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
