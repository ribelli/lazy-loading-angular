import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule) },
  { path: 'music', loadChildren: () => import('@pages/music/music.module').then(m => m.MusicModule) },
  { path: 'series', loadChildren: () => import('@pages/series/series.module').then(m => m.SeriesModule) },
  { path: 'movies', loadChildren: () => import('@pages/movies/movies.module').then(m => m.MoviesModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
