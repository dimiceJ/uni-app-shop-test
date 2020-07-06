import { http } from '../http.js'

export const getPics = (opt) => http('/api/getimgcategory',opt);
export const getItem = (opt) => http('/api/getimages/',opt);
