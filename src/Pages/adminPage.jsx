import { Outlet, useNavigate } from "react-router-dom";
import "../Style/Style.css";

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-main-div">
      <div className="admin-1">
        <h1>Admin page</h1>
        

        <p onClick={() => navigate("/viewpatients")}>View Patients</p>
        <p onClick={() => navigate("/viewdoctors")}>View Doctors</p>
        <p onClick={() => navigate("/viewmedicines")}>View Medicines</p>
      </div>
      <div className="admin-2">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
