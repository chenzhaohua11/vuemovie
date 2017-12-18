import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
export function getHot (start) {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items'
  const data = Object.assign({}, commonParams, {
    start: start
  })
  return jsonp(url, data, options)
}
