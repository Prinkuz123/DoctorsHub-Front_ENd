import {  Outlet, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "../Style/Style.css";


const AdminPage = () => {
  const navigate=useNavigate()
  return (
    <div className="admin-main-div">
      <div className="admin-1">
      <h1>Admin page</h1>
      <p  onClick={()=>{navigate('/adminpage')}}>Admin</p>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Patients
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/viewpatients">View Patients</Dropdown.Item>
        <Dropdown.Item href="#/action-2">View Singlepatients</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <br/>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
  Doctors
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/viewdoctors">View Doctors</Dropdown.Item>
      <Dropdown.Item href="#/action-2">View Single Doctors</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <br/>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
Medicines
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/viewmedicines">View Medicines</Dropdown.Item>
    <Dropdown.Item href="#/action-2">View Single Doctors</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </div>
      <div className="admin-2"> 
      <Outlet/>
      </div>
      </div>
  
  );
};

export default AdminPage;
