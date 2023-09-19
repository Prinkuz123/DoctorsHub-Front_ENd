import axios from "axios";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewSingleDoctor = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const { id } = useParams();
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/admin/doctor/${id}`
        );
        const data = response.data.data;
        setDoctorsData(data);
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);


const edit = async () => {
  const updateData = {
    username: inputRef.current.username.value,
    qualification: inputRef.current.qualification.value,
    specialisation: inputRef.current.specialisation.value,
    age: inputRef.current.age.value,
    address: inputRef.current.address.value,
  };

  try {
    const response = await axios.put(`http://localhost:5000/admin/doctor/${id}/update`, updateData);

    const Data = response.data.data;
    setDoctorsData(Data);
    navigate("/viewdoctors");
  } catch (error) {
    console.error(error);
  }
};
const handleDelete=()=>{
  try{
    axios.delete(`http://localhost:5000/admin/doctor/${id}/delete`)
    setDoctorsData([])
    navigate('/viewdoctors')
  }
  catch(error){
    console.log(error)
  }
}


  return (
    <div>
      
      <form
        ref={inputRef}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
      <h3> Edit Doctors Details</h3>
        <div>
          <label>Name</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="username"
            defaultValue={doctorsData.username}
            
          />
        </div>
        <div>
          <label>Qualification</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="qualification"
            defaultValue={doctorsData.qualification}
          />
        </div>
        <div>
          <label>specialisation</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="specialisation"
            defaultValue={doctorsData.specialisation}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="age"
            defaultValue={doctorsData.age}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="address"
            defaultValue={doctorsData.address}
          />
        </div>
        <div style={{ paddingTop: "1rem", paddingLeft: "1.5rem" }}>
          <Button variant="contained" onClick={edit}>
            Submit
          </Button>
          <Button variant="contained" onClick={handleDelete}>Delete</Button>
        </div>
      </form>
    </div>
  );
};

export default ViewSingleDoctor;
