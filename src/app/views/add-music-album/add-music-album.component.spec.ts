import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicAlbumComponent } from './add-music-album.component';

describe('AddMusicAlbumComponent', () => {
  let component: AddMusicAlbumComponent;
  let fixture: ComponentFixture<AddMusicAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMusicAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusicAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
