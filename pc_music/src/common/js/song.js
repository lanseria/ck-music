import { delelteHttp } from './util'
export default class Song {
  constructor ({
    name,
    singer,
    title,
    subtitle,
    mid,
    time_public,
    album,
    interval
  }) {
    this.name = name
    this.singer = singer
    this.title = title
    this.subtitle = subtitle
    this.mid = mid
    /* eslint-disable camelcase */
    this.time_public = time_public
    this.album = album
    this.interval = interval
  }
}

export function createSong (unformatSong) {
  return new Song({
    name: unformatSong.name,
    singer: unformatSong.singer,
    title: unformatSong.title,
    subtitle: unformatSong.subtitle,
    mid: unformatSong.mid,
    time_public: unformatSong.time_public,
    album: unformatSong.album,
    interval: unformatSong.interval
  })
}
