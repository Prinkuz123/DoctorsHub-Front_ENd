import { useEffect,useRef,useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setError, setLoading, setPatients } from "../Redux/Slices/patient";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Viewpatients = () => {
  const patient= useSelector((state) => state.patient.patients);
  const loading = useSelector((state) => state.patient.loading);
  const error = useSelector((state) => state.patient.error);

  
  const dispatch = useDispatch();
  const inputRef=useRef()
const [searchData,setSearchData]=useState([])  


const handleSearch = () => {
  const search = inputRef.current.value.trim().toLowerCase();
  const searchData = patient.filter((item) =>  item.email.toLowerCase().includes(search));
  setSearchData(searchData);
  console.log(searchData);
}

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
<div  className="view-main">  
<div><h1>Patients</h1>
<Form className="d-flex">
  <Row>
    <Col xs="12" className="mx-auto">
      <Form.Control
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={handleSearch}
        ref={inputRef}
      />
    </Col>
    <Col xs="auto">
    </Col>
  </Row>
</Form>
</div>

    
      {loading ? (
        <h3>loading</h3>
      ) : error ? (
        <h3>Error:{error.message}</h3>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Username</th>
              <th>email</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone no.</th>
            </tr>
          </thead>
          <tbody>
          {(searchData.length>0?searchData:patient).map((data,index) =>(  <tr key={data.id}>
            <td>{index+1}</td>
            <td  id={data.id}>{data.username}</td>
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
