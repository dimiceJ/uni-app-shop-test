import { http } from '../http.js'
export const getGoods = (opt) => http('/api/getgoods',opt);
