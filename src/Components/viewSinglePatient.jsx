import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const ViewSinglePatient = () => {
  const [patientData, setPatientData] = useState([]);
  const { id } = useParams();
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/admin/patients/${id}`
        );
        const data = response.data.data;
        setPatientData(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, [id]);

  const edit = async () => {
    const updatedPatientData = {
      username: inputRef.current.username.value,
      address: inputRef.current.address.value,
      email: inputRef.current.email.value,
      age: inputRef.current.age.value,
      password: inputRef.current.password.value,
    };
    try {
      const response = await axios.put(
        `http://localhost:5000/admin/patients/${id}/update`,
        updatedPatientData
      );

      const updateData = response.data.data;
      setPatientData(updateData);
      navigate("/viewpatients");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/admin/patients/${id}/delete`);
      setPatientData([]);
      navigate("/viewpatients");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      ref={inputRef}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h3>Edit Details</h3>
      <div>
        <label>Name</label>
        <input
          style={{ display: "flex", paddingLeft: "50px" }}
          name="username"
          defaultValue={patientData.username}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          style={{ display: "flex", paddingLeft: "50px" }}
          name="email"
          defaultValue={patientData.email}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          style={{ display: "flex", paddingLeft: "50px" }}
          name="phone"
          defaultValue={patientData.phone}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          style={{ display: "flex", paddingLeft: "50px" }}
          name="password"
          defaultValue={patientData.password}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          style={{ display: "flex", paddingLeft: "50px" }}
          name="age"
          defaultValue={patientData.age}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          style={{ display: "flex", paddingLeft: "50px" }}
          name="address"
          defaultValue={patientData.address}
        />
      </div>

      <div style={{ paddingTop: "1rem", paddingLeft: "1.5rem" }}>
        <Button variant="contained" onClick={edit}>
          Submit
        </Button>
        <Button variant="contained" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </form>
  );
};

export default ViewSinglePatient;
