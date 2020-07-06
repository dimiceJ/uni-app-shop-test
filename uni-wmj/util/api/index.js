import { http } from '../http.js'
export const getLunbo = (opt) => http('/api/getlunbo',opt);

export const getGoods = (opt) => http('/api/getgoods?pageindex=1',opt);