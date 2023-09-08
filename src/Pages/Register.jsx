import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRef } from "react";
import axios from 'axios'



const Register = () => {
  const inputRef=useRef(null)


  const handleSubmit= async ()=>{
    const username=inputRef.current.username.value;
    const password=inputRef.current.password.value
    const email=inputRef.current.email.value
    const age=inputRef.current.age.value
    const address=inputRef.current.address.value
    const phone=inputRef.current.phone.value;
    console.log(username,password,email,age,address,phone);

    try{
      const response=await axios.post('http://localhost:5000/patient/register',{
        username:username,
        password:password,
        email:email,
        age:age,
        address:address,
        phone:phone,

      })
      console.log(response)
      if(response.status===200){
        alert(response.data.message)
        inputRef.current.username.value="",
        inputRef.current.password.value="",
        inputRef.current.email.value="",
        inputRef.current.age.value="",
        inputRef.current.address.value="",
        inputRef.current.phone.value=""

      }
      else{
         
        alert(response.data.message)
      }

    }

  catch(error){
    console.log(error)
  }

}


  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        ref={inputRef}
        onSubmit={(e) => { e.preventDefault() }}

        >
        <h1>Register</h1>
        <TextField id="outlined-basic" label="Username"  variant="outlined" name='username'/>
        <TextField id="outlined-basic" label="Password" variant="outlined" name="password" />
        <TextField id="outlined-basic" label="Age" variant="outlined" type="number" name='age'/>
        <TextField id="outlined-basic" label="email" variant="outlined" name='email' />
        <TextField id="outlined-basic" label="Address" variant="outlined" name='address'/>
        <TextField id="outlined-basic" label="Phone" variant="outlined" type="number" name='phone'/>
        <Stack spacing={2} direction="row" sx={{ justifyContent: "center", width: "100%" }}>
        <Button variant="contained" type='submit' onClick={handleSubmit}>Register</Button>
      </Stack>

      </Box>
    </div>
  );
};


export default Register
