import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgUploaderModule } from 'ngx-uploader';
import { DateTimePickerModule } from 'ng-pick-datetime';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './routes/error404/error404.component';
import { PlayersComponent } from './routes/players/players.component';
import { HomeComponent } from './routes/home/home.component';
import { GameComponent } from './routes/game/game.component';

import { GameService } from './services/game.service';
import { GameLoadedGuard } from './guards/game-loaded.guard';
import { ControlModule } from './controls/control.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
    HomeComponent,
    PlayersComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgUploaderModule,
    DateTimePickerModule,
    ControlModule
  ],
  providers: [
    GameService,
    GameLoadedGuard
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
