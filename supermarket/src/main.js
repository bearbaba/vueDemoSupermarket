import Vue from 'vue'
import App from './App.vue'

// boostrap的一些依赖
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'


// CSS样式
import "normalize.css"
import "bootstrap"
import "./assets/css/base.css"

// 导入 store 管理全局状态
import store from "./store"

// 路由
import router from './router/router'

import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

import { Card } from 'vant';

import { SwipeCell } from 'vant';

import { Button } from "vant";

import { Checkbox, CheckboxGroup } from 'vant';

import { Toast } from "vant"

import { Popup } from 'vant';

import { AddressList } from 'vant';

import { AddressEdit } from 'vant';

Vue.use(AddressEdit);

Vue.use(AddressList);

Vue.use(Popup);

Vue.use(Toast)

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.use(Button)

Vue.use(Card);
Vue.use(SwipeCell)
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
