//actions用来处理异步操作(发送ajax请求)
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types';
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api';
export default {
  //异步获取地址信息
  async getAddress ({commit,state}) {
    const {longitude,latitude} = state;
    //发送ajax
    const result = await reqAddress(longitude,latitude);
    if (result.code === 0) {
      //请求成功
    const address = result.data;
    commit(RECEIVE_ADDRESS,{address})
    }
  },

  //异步获取食品分类列表
  async getFoodCategorys ({commit}) {
    const result = await reqFoodCategorys();
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },

  //异步获取商家列表
  async getShops ({commit,state}) {
    const {longitude,latitude} = state;
    const result = await reqShops({longitude,latitude});
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
