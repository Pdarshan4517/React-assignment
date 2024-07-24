import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Addeuser } from "../redux/action";

const Adduser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contac: "",
    address: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();  // Fixed typo
  const navigate = useNavigate();  // Changed to navigate for consistency

  const handlechanged = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.address || !state.email || !state.contac) {
      setError("Please input all input fields");
    } else {
      dispatch(Addeuser(state));  // Fixed typo
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
        <h2>Add User</h2>
        <Box
          sx={{ "& > :not(style)": { marginTop: "20px", width: "45ch" } }}
        >
          <TextField
            name="name"
            onChange={handlechanged}
            label="Name"
            value={state.name}
            type="text"
            variant="outlined"
            fullWidth
          /><br/>
          <TextField
            name="email"
            onChange={handlechanged}
            label="Email"
            value={state.email}
            type="email"
            variant="outlined"
            fullWidth
          /><br/>
          <TextField
            name="contac"
            onChange={handlechanged}
            label="Contact"
            value={state.contac}
            type="number"
            variant="outlined"
            fullWidth
          /><br/>
          <TextField
            name="address"
            onChange={handlechanged}
            label="Address"
            value={state.address}
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
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Adduser;