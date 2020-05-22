import {createStore} from 'redux';
import {reducer} from '../reducers/reducers';

// 使用redux中的方法创建一个 sotre 来存储数据
export default createStore(reducer);