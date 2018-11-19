//包含n个接口请求函数的模块

import ajax from './ajax';

//跨域
  const BASE = '/api';
//根据经纬度获取位置详情
export const reqAddress = (longitude,latitude) => ajax (BASE + `/position/${latitude},${longitude}`);

//获取食品分类列表
export const reqFoodCategorys = () => ajax (BASE + '/index_category');

//根据经纬度获取商铺列表
export const reqShops = ({longitude,latitude}) => ajax(BASE + '/shops',{latitude,longitude})
