import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    productList:[],
  },
  getters: {
    PRODUCT_LIST: state => {
        return state.productList;
      },
   
    
  },
  mutations: {
    SET_PRODUCT_LIST: (state, payload) => {
        
        state.productList = payload.items;
        
      },
      REMOVE_ITEM: (state, id) => {
        for(let prod in state.productList){
            if(id == state.productList[prod].id ){

                state.productList.splice(prod,1);

              return 
            }
          }
      },
  },
  actions: {
    GET_PRODUCT_LIST: async (context, payload) => {
        let {data} = await Axios.get('static/items.json')
        .catch(ex=>console.log('parsing failed', ex));
       
        context.commit('SET_PRODUCT_LIST', data);
      },
      GET_REMOVE_ID: async (context, id)=>{
        context.commit('REMOVE_ITEM',id)
      }
 
  },
});