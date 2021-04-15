import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    swiperImgs: [],
    cartList: [],
    currentIndex: 0
  },
  mutations: {
    changeTrue(state, array) {
      console.log(array)
      array.forEach(item => {
        for (let i of state.cartList) {
          if (item == i.index) {
            i.checked = true
          }
        }
      })
      console.log("cartList", state.cartList);
    },

    changeFalse(state, array) {
      array.forEach(item => {
        for (let i of state.cartList) {
          if (item == i.index) {
            i.checked = false
          }
        }
      })
      console.log("cartList", state.cartList);
    },

    addCounter(state, payload) {
      payload.count++
    },

    removeItem(state, index) {
      console.log("delete")
      state.cartList.splice(index, 1)
    },

    addCurrentIndex(state) {
      state.currentIndex++
    }

  },
  actions: {

    aUpdate(context, payload) {
      context.commit("update", payload.data)
    },

    // 以下内容做个判断，如果同一商品出现多次，count增加
    addCart(context, payload) {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      payload.checked = false;
      if (oldProduct) {
        context.commit("addCounter", oldProduct)
      } else {
        payload.count = 1
        payload.index = context.state.currentIndex
        console.log(payload.index)
        context.commit("addCurrentIndex")
        context.state.cartList.push(payload)
      }
    },

    aChangeTrue(context, array) {
      context.commit("changeTrue", array)
    },

    aChangeFalse(context, array) {
      context.commit("changeFalse", array)
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    checkTrueLength(state) {
      let length = 0
      for (let i of state.cartList) {
        if (i.checked == true) {
          length++
        }
      }
      return length
    },
    totalPrice(state) {
      let sum = 0;
      for (let i of state.cartList) {
        if (i.checked == true) {
          console.log(i.realPrice)
          sum += parseFloat(i.realPrice)*i.count
        }
      }
      return sum
    }
  }
})
