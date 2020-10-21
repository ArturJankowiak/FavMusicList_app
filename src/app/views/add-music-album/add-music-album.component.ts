import { DataBaseService } from './../../data-base.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-music-album',
  templateUrl: './add-music-album.component.html',
  styleUrls: ['./add-music-album.component.css']
})
export class AddMusicAlbumComponent {
  formAlbum = this.fb.group({
    author: this.fb.control(''),
    title: this.fb.control(''),
  });

  constructor(private db: DataBaseService, private fb: FormBuilder, private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.db.getAlbums().subscribe(albums => {
        const album = albums.find(e => e.id === Number(id));
      });
    });
  }

  onSubmitForm(): void {
    this.db.addAlbum(this.formAlbum.value.author, this.formAlbum.value.title);
    this.formAlbum.reset();
  }
}
