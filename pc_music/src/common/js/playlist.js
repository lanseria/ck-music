import { delelteHttp } from './util'
export default class Playlist {
  constructor ({
    contentId,
    cover,
    creator,
    listenNum,
    title,
    username
  }) {
    this.content_id = contentId
    this.cover = delelteHttp(cover)
    this.creator = creator
    this.listen_num = listenNum
    this.title = title
    this.username = username
  }
}

export function createPlaylist (listData) {
  return new Playlist({
    contentId: listData.tid,
    cover: listData.cover_url_big,
    creator: listData.creator_info.uin,
    listenNum: listData.access_num,
    title: listData.title,
    username: listData.creator_info.nick
  })
}
