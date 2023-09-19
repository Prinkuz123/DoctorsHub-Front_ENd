import axios from "axios";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewSingleMedicine = () => {
  const [medicinedata, setMedicineData] = useState([]);
  const { id } = useParams();
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/admin/medicine/${id}`
        );
        console.log(response);
        const updateddata = response.data.data;
        setMedicineData(updateddata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const edit = async () => {
    const updateData = {
      name: inputRef.current.name.value,
      company: inputRef.current.company.value,
      price: inputRef.current.price.value,
    };
    try {
      const response = await axios.put(
        `http://localhost:5000/admin/medicine/${id}/update`,
        updateData
      );

      const Data = response.data.data;
      setMedicineData(Data);
      navigate("/viewmedicines");
    } catch (error) {
      console.error(error);
    }
  };

const handleDelete=()=>{
  try{
    axios.delete(`http://localhost:5000/admin/medicine/${id}/delete`)
  
  setMedicineData([])
navigate('/viewmedicines')
}
catch(error){
  console.error(error)
}

}

  return (
    <div>
      <h3>View single medicine</h3>
      <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Name</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="name"
            defaultValue={medicinedata.name}
          />
        </div>
        <div>
          <label>Company</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="company"
            defaultValue={medicinedata.company}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="price"
            defaultValue={medicinedata.price}
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

export default ViewSingleMedicine;
