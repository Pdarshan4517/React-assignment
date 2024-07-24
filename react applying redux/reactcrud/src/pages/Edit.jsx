import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getsingleuser, updateuser } from "../redux/action";

const Edit = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contac: "",
    address: "",
  });

  const [error, setError] = useState("");
  let {id}=useParams();
  const {user}= useSelector((state)=>state.data);
  const dispatch = useDispatch();  // Fixed typo
  const navigate = useNavigate();  // Changed to navigate for consistency

  useEffect(()=>{
     dispatch(getsingleuser(id));
  },[dispatch,id]) 

 useEffect(()=>{
     if(user){
        setState({...user});
     }
 },[user])

  const handlechanged = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.address || !state.email || !state.contac) {
      setError("Please input all input fields");
    } else {
      dispatch(updateuser(state,id));  // Fixed typo
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ width: "100px", marginTop: "20px" }}
        color="primary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      {error && <h3 style={{color: "red"}}>{error}</h3>}
      <form onSubmit={handlesubmit}>
        <h2>Edit User</h2>
        <Box
          sx={{ "& > :not(style)": { marginTop: "20px", width: "45ch" } }}
        >
          <TextField
            name="name"
            onChange={handlechanged}
            label="Name"
            value={state.name || ""}
            type="text"
            variant="outlined"
            fullWidth
          /><br/>
          <TextField
            name="email"
            onChange={handlechanged}
            label="Email"
            value={state.email || ""}
            type="email"
            variant="outlined"
            fullWidth
          /><br/>
          <TextField
            name="contac"
            onChange={handlechanged}
            label="Contact"
            value={state.contac || ""}
            type="number"
            variant="outlined"
            fullWidth
          /><br/>
          <TextField
            name="address"
            onChange={handlechanged}
            label="Address"
            value={state.address || ""}
            type="text"
            variant="outlined"
            fullWidth
          /><br/>
          <Button
            type="submit"
            variant="contained"
            style={{ width: "100px" }}
            color="primary"
          >
            Update
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Edit;