import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // true: 주차, false: 출차
    // true: 회원, false: 비회원
    userState: [false, false],
    // 시간에 따른 가격이 들어감
    time: 0,
    message: null
  },
  mutations: {
    USER_SET (state, data) {
      state.userState[1] = data
    },
    BEHAVIOR_SET (state, data) {
      state.userState[0] = data
    },
    TIME_SET (state, data) {
      state.time = data * 500 / 30
    },
    MESSAGE_SET (state, data) {
      state.message = data
    }
  },
  actions: {
    setUserState (context, data) {
      return new Promise(resolve => {
        if (data.type) {
          context.commit('USER_SET', data.state)
        } else {
          context.commit('BEHAVIOR_SET', data.state)
        }
        console.log(context.state.userState)
        resolve(true)
      })
    },
    setTime (context, data) {
      return new Promise(resolve => {
        context.commit('TIME_SET', data.value)
        resolve(true)
      })
    },
    setParkingState (context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/' + (context.state.userState[0] ? 'on' : 'off') + (context.state.userState[1] ? '' : 'N'))
          .then(
            res => {
              console.log(res)
              if (res.data.state) {
                resolve(res.data.id)
              } else {
                context.commit('MESSAGE_SET', '시간초가 지났습니다.')
                reject(res.data.state)
              }
            }
          )
      })
    }
  },
  modules: {
  }
})
