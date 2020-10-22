import { MusicAlbum } from './music-album';
import { v4 as uuidv4 } from 'uuid';

export const MUSIC_LIST: Array<MusicAlbum> = [
  {
    id: uuidv4(),
    author: 'Queen',
    title: 'A Kind of Magic',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    author: 'The Beatles',
    title: 'Abbey Road',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    author: 'Kings of Leon',
    title: 'Because of the Times',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    author: 'Florence and the Machine',
    title: 'Songs From Final Fantasy XV',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    author: 'O.S.T.R',
    title: 'Podróż zwana życiem',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    author: 'Paul Kalkbrenner',
    title: 'Berlin Calling',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    author: 'Red Hot Chili Peppers',
    title: 'Blood Sugar Sex Magik',
    isFavorite: false,
  },
];
