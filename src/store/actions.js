//actions用来处理异步操作(发送ajax请求)
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER
} from './mutation-types';
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo
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
  },

  //保存用户信息(同步的)
    saveUser ({commit},user) {
      commit(RECEIVE_USER,{user})
  },
  //获取用户输入的信息,判断用户处于登录状态还是为登录状态,如果登录过,返回值里会有一个id,然后根据这个id值来判断是登录界面还是个人中心界面
  async getUserInfo ({commit}) {
    const result = reqUserInfo();
    if(result.code === 0) {
      const user = result.data;
      commit(RECEIVE_USER,{user})
    }
  }

}
