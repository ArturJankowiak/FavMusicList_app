import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavMusicListComponent } from './views/fav-music-list/fav-music-list.component';
import { AddMusicAlbumComponent } from './views/add-music-album/add-music-album.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: FavMusicListComponent },
  { path: 'add', component: AddMusicAlbumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
