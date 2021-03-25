import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@pages/home/home.component';
import { MoviesComponent } from '@pages/movies/movies.component';
import { SeriesComponent } from '@pages/series/series.component';
import { MusicComponent } from '@pages/music/music.component';

export const COMPONENTS = [
  AppComponent,
  HomeComponent,
  MoviesComponent,
  SeriesComponent,
  MusicComponent
];


@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
