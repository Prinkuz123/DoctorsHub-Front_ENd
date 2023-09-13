import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setMedicines } from "../Redux/Slices/medicine";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ViewMedicines = () => {
    const medicine= useSelector ((state)=>state.medicine.medicines)
    const loading=useSelector((state)=>state.medicine.loading)
const error=useSelector((state)=>state.medicine.error)

const dispatch=useDispatch()
const inputRef=useRef()
const[searchData,setSearchData]=useState([])

const handleSearch=()=>{
  const search=inputRef.current.value.trim().toLowerCase()
  const searchData=medicine.filter((data)=>data.name.toLowerCase().includes(search))
  setSearchData(searchData)
}


useEffect(()=>{
  dispatch(setLoading("true"))  
  axios.get("http://localhost:5000/admin/medicine")
  .then((response)=>{
dispatch(setMedicines(response.data.data))
dispatch(setLoading(false))
  })
  .catch((error)=>{
    dispatch((setError(error)))
    dispatch((setLoading(false)))
  })
},[dispatch])
  return <div>
<h1>Medicines</h1>
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
{loading?<h3>Loading</h3>:error?<h3>Error</h3>:(
    <Table responsive="sm">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Company name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {(searchData.length>0?searchData:medicine).map((data,index)=>(<tr key={data.id}>
          <td>{index+1}</td>
          <td>{data.name}</td>
          <td>{data.company}</td>
          <td>{data.price}</td>
        </tr>))}
          
         
          
        </tbody>
      </Table>

)}
  
  
  </div>;
};

export default ViewMedicines;
