import TextField from "@mui/material/TextField";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// import useNavigate from "react"
const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const inputRef = useRef(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAdmin) {
      var username = inputRef.current.username.value;
    } else {
      var email = inputRef.current.email.value;
    }

    const password = inputRef.current.password.value;
    try {
      // const response = await axios.post("http://localhost:5000/patient/login", {
      //   email: email,
      //   password: password

      // });
      const url = isAdmin
        ? "http://localhost:5000/admin/login"
        : "http://localhost:5000/patient/login";
      const response = await axios.post(url, {
        username: username,
        email: email,
        password: password,
      });

      // console.log(response.data.status);
      if (response.data.status === "success") {
        // console.log(email, password);
        alert(response.data.message);
        if (isAdmin) {
          return navigate("/adminPage");
        } else {
          navigate("/");
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("some errors while login", error);
    }
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          paddingTop: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        ref={inputRef}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        noValidate
        autoComplete="on"
      >
        <h1>Login</h1>
        {isAdmin?   <TextField
          id="outlined-basic"
          label="username"
          name="username"
          variant="outlined"
        />   :<TextField
          id="outlined-basic"
          label="email"
          name="email"
          variant="outlined"
        />}
     
        <TextField label="Password" name="password" type="password" variant="outlined" />

        <Stack
        spacing={2}
        direction="column" // Set direction to "column" to stack items vertically
        sx={{ justifyContent: "center", width: "100%" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
          }
          label="Are you an admin?"
        />
      </Stack>
      <Stack
        spacing={2}
        direction="column" // Set direction to "column" to stack items vertically
        sx={{ justifyContent: "center", width: "100%" }}
      >
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Stack>
      



        <p>If you are not registered please 
        <Link to="/Register">register</Link> first </p>
      </Box>
    </div>
  );
};

export default Login;
