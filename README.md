# dzdp

> 仿大众点评，作者：fanmi

# 技术栈
Vue CLI+Vue Router+Vuex+Less+Vant+axios+Swiper

# 项目展示

## 首页
<div align=center> <img src="https://img-blog.csdnimg.cn/20200205184711401.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0OTk3MTQ3,size_16,color_FFFFFF,t_70" width = "300" height = "1000"  /> </div>

## 城市选择
<div align=center> <img src="https://img-blog.csdnimg.cn/20200205190000751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0OTk3MTQ3,size_16,color_FFFFFF,t_70" width = "350" height = "500"  /> </div>

## 轮播图（以美食、酒店、外卖为例）
<div align=center> <img src="https://img-blog.csdnimg.cn/20200205184036311.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0OTk3MTQ3,size_16,color_FFFFFF,t_70" width = "350" height = "500"  /> </div>
<div align=center> <img src="https://img-blog.csdnimg.cn/20200205184105654.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0OTk3MTQ3,size_16,color_FFFFFF,t_70" width = "350" height = "500"  /> </div>
<div align=center> <img src="https://img-blog.csdnimg.cn/20200205184223830.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0OTk3MTQ3,size_16,color_FFFFFF,t_70" width = "350" height = "500"  /> </div>
<div align=center> <img src="https://img-blog.csdnimg.cn/20200205184243507.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0OTk3MTQ3,size_16,color_FFFFFF,t_70" width = "350" height = "500"  /> </div>

## 猜你喜欢详情（以一口香烧饼为例）
<div align=center> <img src="https://img-blog.csdnimg.cn/20200205184709447.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0OTk3MTQ3,size_16,color_FFFFFF,t_70" width = "300" height = "1400"  /> </div>

# 新建webpack
- vue init webpack Fan_DAZHONGDIANPING

# npm
- npm install less less-loader -D
- npm install vuex -S
- npm install axios -S
- npm install mockjs
- npm install swiper
- npm i vant -S

## 引入Vant
```javascript
import Vant from 'vant';
import'vant/lib/index.css';
Vue.use(Vant)
```

## swiper的应用

```javascript
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  mounted: function() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
```
## 引入axios
```javascript
import axios from 'axios'
```
