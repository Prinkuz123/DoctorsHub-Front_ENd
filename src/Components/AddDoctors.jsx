import { Button } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const AddDoctors = () => {
  const inputRef = useRef(null);
  const navigate=useNavigate()

  const addData = async () => {
    const username = inputRef.current.username.value;
    const specialisation = inputRef.current.qualification.value;
    const qualification = inputRef.current.specialisation.value;
    const age = inputRef.current.age.value;
    const address = inputRef.current.address.value;
    // console.log(username,specialisation,qualification,age,address);
    try {
      const response = await axios.post("http://localhost:5000/admin/doctor", {
        username: username,
        specialisation: specialisation,
        qualification: qualification,
        age: age,
        address: address,
      });

      if (response.status === 200) {
        alert(response.data.message);
        navigate('/viewdoctors')
        inputRef.current.username.value = "";
        inputRef.current.qualification.value = "";
        inputRef.current.specialisation.value = "";
        inputRef.current.age.value = "";
        inputRef.current.address.value = "";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-Doctor">
      <form ref={inputRef}  onSubmit={(e)=>e.preventDefault()} >
        <h3>Add Doctors </h3>
        <div>
          <label>Name</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="username"
          />
        </div>
        <div>
          <label>Qualification</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="qualification"
          />
        </div>
        <div>
          <label>Specialisation</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="specialisation"
          />
        </div>
        <div>
          <label>Age</label>
          <input style={{ display: "flex", paddingLeft: "50px" }} name="age" />
        </div>
        <div>
          <label>Address</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="address"
          />
        </div>

        <div style={{ paddingTop: "1rem", paddingLeft: "1.5rem" }}>
          <Button variant="contained" onClick={addData}>
            Submit
          </Button>
          
        </div>
      </form>
    </div>
  );
};

export default AddDoctors;
