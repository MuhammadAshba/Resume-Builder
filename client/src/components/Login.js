import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., send data to backend
    console.log(formData); // Placeholder for now
  };

  return (
    <div>
      <NavBar></NavBar>
      <br/>
      <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
        >
          <ArrowBackIcon style={{marginRight:"5px"}}/> Back
        </Button>
      <br/>
      <br/>

      <header style={{ textAlign: "center" }}>
        <h1>LOGIN TO CONTINUE</h1>
      </header>
      <br/>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <br />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
