
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types';
export default {
  [RECEIVE_ADDRESS] (state,{address}) { //adress 是我最终要更新的数据(自己定义的名字)
    state.address = address;
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops;
  }

}
