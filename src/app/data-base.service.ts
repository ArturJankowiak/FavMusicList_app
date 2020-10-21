import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MUSIC_LIST } from './views/fav-music-list/music-list.mock';
import { MusicAlbum } from './views/fav-music-list/music-album';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  private database$ = new BehaviorSubject<MusicAlbum[]>([]);    
  private albums = MUSIC_LIST

  constructor() {
    this.shareDataBase(this.albums);
   }

  getAlbums(): Observable<MusicAlbum[]> {
    return this.database$.asObservable();
  }

  addAlbum(author: string, title: string): void {
    const album: MusicAlbum = {
      id: 999,
      author, 
      title,
      isFavorite: false
    };
    this.albums.push(album);
    this.shareDataBase(this.albums);
  }

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter(e => e.id !== id);
    this.shareDataBase(this.albums);
  }

  markAsFavorite(id: number): void {
    const album = this.albums.find(e => e.id === id);
    album.isFavorite = !album.isFavorite;
  }

  private shareDataBase(albums: MusicAlbum[]): void {
    this.database$.next([...albums]);
  }
}

