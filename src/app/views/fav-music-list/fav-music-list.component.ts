import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataBaseService } from './../../data-base.service';
import { MusicAlbum } from './music-album';

@Component({
  selector: 'app-fav-music-list',
  templateUrl: './fav-music-list.component.html',
  styleUrls: ['./fav-music-list.component.css'],
})
export class FavMusicListComponent implements OnInit {
  albums$: Observable<MusicAlbum[]>;

  constructor(private db: DataBaseService) {}

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.albums$ = this.db.getAlbums();
  }

  onEdit(id: number): void {}

  onFavorite(id: string): void {
    this.db.markAsFavorite(id);
  }

  onDelete(id: string): void {
    this.db.deleteAlbum(id);
  }
}
