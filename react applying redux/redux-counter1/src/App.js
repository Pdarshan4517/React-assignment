import React from 'react';

import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from './Action';


export default function App() {
   const count = useSelector((state)=>state.count);
   const dispatch = useDispatch();
  return(
    <div className='main' style={{display:'flex',alignItems:'center',justifyContent:'center',height:'500px'}}>
    <div className='App' style={{ textAlign:'center', backgroundColor:'lightblue', width:'30%', height:'200px' }}>
       <h1>HELOOO Redux</h1>
       <div>COUNT:{count}</div>
       <button    style={{marginTop:'30px'}}  onClick={()=>dispatch(increment())}>increment</button>
       <button style={{marginTOp:'30px',marginLeft:'20px'}}   onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
    </div>
  );
}



