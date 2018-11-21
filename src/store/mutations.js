
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
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
  },
  [RECEIVE_USER] (state,{user}) {
    state.user = user;
  },
  [RESET_USER] (state) {
    state.user = {};
  },
  [RECEIVE_GOODS] (state,{goods}) {
    state.goods = goods;
  },
  [RECEIVE_RATINGS] (state,{ratings}) {
    state.ratings = ratings;
  },
  [RECEIVE_INFO] (state,{info}) {
    state.info = info;
  },

}
