import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setError, setLoading, setPatients } from "../Redux/Slices/reducer";
import Table from "react-bootstrap/Table";

const Viewpatients = () => {
  const patient= useSelector((state) => state.patient.patients);
  console.log(patient);
  const loading = useSelector((state) => state.patient.loading);
  const error = useSelector((state) => state.patient.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("http://localhost:5000/admin/patients")

      .then((response) => {
        dispatch(setPatients(response.data.data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error));
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  return (
    <div >
      <h1>patients</h1>
      {loading ? (
        <h3>loading</h3>
      ) : error ? (
        <h3>Error:{error.message}</h3>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>email</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone no.</th>
            </tr>
          </thead>
          <tbody>
         { patient.map((data) =>(  <tr key={data.id}>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.age}</td>
            <td>{data.address}</td>
            <td>{data.phone}</td>
          </tr>))}
          

           
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Viewpatients;
