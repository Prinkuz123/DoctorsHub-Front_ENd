import { Button } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const AddMedicines = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const addMedicineData = async () => {
    const name = inputRef.current.name.value;
    const company = inputRef.current.company.value;
    const price = inputRef.current.price.value;
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/medicine",
        {
          name: name,
          company: company,
          price: price,
        }
      );

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/viewmedicines");
        inputRef.current.name.value = "";
        inputRef.current.company.value = "";
        inputRef.current.price.value = "";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <h3>Add Medicines </h3>
      <form
        ref={inputRef}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label>Name</label>
          <input style={{ display: "flex", paddingLeft: "50px" }} name="name" />
        </div>
        <div>
          <label>Company</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="company"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            style={{ display: "flex", paddingLeft: "50px" }}
            name="price"
          />
        </div>

        <div style={{ paddingTop: "1rem", paddingLeft: "1.5rem" }}>
          <Button variant="contained" onClick={addMedicineData}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMedicines;
