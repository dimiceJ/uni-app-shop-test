import { http } from '../http.js'
export const getSwipers = (opt) => http('/api/getthumimages/',opt);
export const getDetailInfo = (opt) => http('/api/goods/getinfo/',opt);
export const getDetailContent = (opt) => http('/api/goods/getdesc/',opt);
