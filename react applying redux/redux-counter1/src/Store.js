import { createStore } from 'react-redux';
import rootreducer from './Reducer';

const Store =  createStore (rootreducer)

export default Store