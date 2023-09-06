import {  Outlet, useNavigate } from "react-router-dom";
import "../Style/Style.css";
const AdminPage = () => {
  const navigate=useNavigate()
  return (
    <div className="admin-main-div">
      <div className="admin-1">
      <h1>Admin page</h1>
      <p  onClick={()=>{navigate('/')}}>Viewpatients</p>
      <p  onClick={()=>{navigate('/viewpatients')}}>Viewpatients</p>
      </div>
      <div className="admin-2"> 
      <Outlet/>
      </div>
      </div>
  
  );
};

export default AdminPage;
