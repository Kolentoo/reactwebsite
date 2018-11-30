// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import './core.css';
// import 'antd-mobile/dist/antd-mobile.css';
// import All from './containers/all';
import {createStore,combineReducers} from 'redux'

// state:保存在store种的数据
// action：容器
// type:简单的字符串常量
// payload：用于更新状态的数据



// 创建reducer方法

const initialState = {
    cart:[
        {
            product:'bread 700g',
            quantity:2,
            unitCost:90
        },
        {
            product:'milk 500ml',
            quantity:1,
            unitCost:47
        }
    ]
}

const productsReducer = function(state=[],action){
    return state;
}

const cartReducer = function(state=initialState,action){
    return state;
}

const allReducers = {
    products:productsReducer,
    cart:cartReducer
}

const rootReducer = combineReducers(allReducers);


let store = createStore(rootReducer);

console.log('initial state:',store.getState());

const ADD_TO_CART = 'ADD_TO_CART';

// const cartReducer = function(state=initialState,action){
//     switch(action.type){
//         case ADD_TO_CART:{
//             return{
//                 ...state,
//                 cart:[...state.cart,action.payload]
//             }
//         }

//         default:
//             return state;
//     }
// }

// function addToCart(product,quantity,unitCost){
//     return{
//         type:ADD_TO_CART,
//         payload:{product,quantity,unitCost}
//     }
// }

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// unsubscribe();

// ReactDOM.render(
//     <All />,
//     document.getElementById('root')
// )




















