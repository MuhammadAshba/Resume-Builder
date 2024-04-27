import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    <>
      <NavBar />
      <br />
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        <ArrowBackIcon style={{ marginRight: "5px" }} /> Back
      </Button>
      <br />
      <br />
      <header style={{ textAlign: "center" }}>
        <h1>REGISTER TO CONTINUE</h1>
      </header>
      <br />
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
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <br />
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
            Sign Up
          </Button>
        </form>
      </main>
      <footer></footer>
    </>
  );
};

export default SignUp;
