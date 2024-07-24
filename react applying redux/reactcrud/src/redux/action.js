import * as types from "./actiontype";
import axios from "axios";

const getusers=(users)=>({
    type:types.GET_USERS,
    payload:users,
});

const userdeleted = ()=>({
    type:types.DELETE_USER 
});

const addusers = ()=>({
    type:types.ADD_USER 
});

const userupdated = ()=>({
    type:types.UPDATE_USER, 
});

const getuser = (user)=>({
    type:types.GET_SINGLE_USER,
    payload:user, 
});

export const loadusers = ()=>{
    return function (dispatch) 
        {
            axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
                console.log("resp",resp);
                dispatch(getusers(resp.data));
            }).catch((error)=>console.log(error));
        };
};

export const Deleteuser = (id)=>{
    return function (dispatch) 
        {
            axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((userdeleted()));
                dispatch(loadusers());
            }).catch((error)=>console.log(error));
        };
};

export const Addeuser = (user)=>{
    return function (dispatch) 
        {
            axios
            .post(`${process.env.REACT_APP_API}`,user)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((addusers()));
                
            }).catch((error)=>console.log(error));
        };
};

export const getsingleuser = (id)=>{
    return function (dispatch) 
        {
            axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((getuser(resp.data)));
                
            }).catch((error)=>console.log(error));
        };
};

export const updateuser = (user,id)=>{
    return function (dispatch) 
        {
            axios
            .put(`${process.env.REACT_APP_API}/${id}`,user)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((userupdated()));
                
            }).catch((error)=>console.log(error));
        };
};