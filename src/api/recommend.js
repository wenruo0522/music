// import jsonp from 'common/js/jsonp'
// import { commonParams, options } from './config'
import { commonParams } from './config'
import axios from 'axios'
// const debug = process.env.NODE_ENV !== 'production'

export function getRecommend () {
  const url = '/api/getTopBanner'
  // const url = debug ? '/api/getTopBanner' : ''

  const data = Object.assign({}, commonParams, {
    // loginUin: 0,
    // hostUin: 0,
    // platform: 'yqq',
    // needNewCode: 0
    platform: 'yqq.json',
    hostUin: 0,
    needNewCode: 0,
    inCharset: 'utf-8',
    format: 'json',
    '-': 'recom' + (Math.random() + '').replace('0.', ''),
    data: {
      'comm': { 'ct': 24 },
      'category': { 'method': 'get_hot_category', 'param': { 'qq': '' }, 'module': 'music.web_category_svr' },
      'recomPlaylist': {
        'method': 'get_hot_recommend',
        'param': { 'async': 1, 'cmd': 2 },
        'module': 'playlist.HotRecommendServer'
      },
      'playlist': {
        'method': 'get_playlist_by_category',
        'param': { 'id': 8, 'curPage': 1, 'size': 40, 'order': 5, 'titleid': 8 },
        'module': 'playlist.PlayListPlazaServer'
      },
      'new_song': { 'module': 'newsong.NewSongServer', 'method': 'get_new_song_info', 'param': { 'type': 5 } },
      'new_album': {
        'module': 'newalbum.NewAlbumServer',
        'method': 'get_new_album_info',
        'param': { 'area': 1, 'sin': 0, 'num': 10 }
      },
      'new_album_tag': { 'module': 'newalbum.NewAlbumServer', 'method': 'get_new_album_area', 'param': {} },
      'toplist': { 'module': 'musicToplist.ToplistInfoServer', 'method': 'GetAll', 'param': {} },
      'focus': { 'module': 'QQMusic.MusichallServer', 'method': 'GetFocus', 'param': {} }
    }
  })
  // return jsonp(url, data, options)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data
  })
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUin: 0,
    sin: 0,
    ein: 19,
    sortId: 5,
    needNewCode: 0,
    format: 'json',
    categoryId: 10000000,
    picmid: 1,
    rnd: Math.random()
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data
  })
}

export function getSongList (disstid) {
  const url = '/api/getCdInfo'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
