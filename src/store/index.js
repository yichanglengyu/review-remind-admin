import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import sysuser from './modules/sysuser'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    sysuser
  },
  getters
})

export default store
