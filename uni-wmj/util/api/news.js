import { http } from '../http.js'

export const getNews = (opt) => http('/api/getnewslist',opt);