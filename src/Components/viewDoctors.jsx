import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "../Redux/Slices/doctor";
import axios from "axios";
import  { setDoctors } from "../Redux/Slices/doctor";
import Table from "react-bootstrap/esm/Table";
import  { setError } from "../Redux/Slices/patient";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";




const ViewDoctors = () => {

const doctor = useSelector((state)=>state.doctor.doctors)
const loading=useSelector((state)=>state.doctor.loading);
const error=useSelector((state)=>state.doctor.error);

const navigate=useNavigate()
const inputRef=useRef()
const dispatch=useDispatch()
const[searchData,setSearchData]=useState([])

const handleSearch=()=>{
  const search=inputRef.current.value.trim().toLowerCase()
const searchData=doctor.filter((data)=>data.username.toLowerCase().includes(search))

 setSearchData(searchData)
}

useEffect(()=>{
  dispatch(setLoading(true))
  axios.get("http://localhost:5000/admin/doctor")

  .then((response)=>{
    dispatch(setDoctors(response.data.data))
    console.log(response.data.data);
    dispatch(setLoading(false))
  })
  .catch((error)=>{
    dispatch(setLoading(false))
    dispatch(setError(error))
  })
},[dispatch])

    return (
    <div style={{justifyContent:"center"}}>
    <h1>Doctors</h1>
    <Form className="d-flex">
   
  <Row>
    <Col xs="12" className="mx-auto">
      <Form.Control
        type="text"
        placeholder="Search with name of Doctor"
        className="search-input"
        onChange={handleSearch}
        ref={inputRef}
      />
    </Col>
    <Col xs="auto">
    </Col>
  </Row>
</Form>

<Button onClick={()=>navigate('/adddoctors')}> Create a Doctor</Button>

    {loading?<h3>loading</h3>:error?<h3>Error</h3>:(
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
           
            <th>Specialisation</th>
           
          </tr>
        </thead>
        <tbody>
        {(searchData.length>0?searchData:doctor).map((data,index)=>(
          <tr key={data.id}>
            <td>{index+1}</td>
            <td onClick={()=>{navigate(`/viewsingledoctor/${data._id}`)}}>{data.username}</td>
            <td>{data.specialisation}</td>
          </tr>
          
         ))}

          
        </tbody>
      </Table>
    
      
    )}

      
    </div>
  )
}

export default ViewDoctors

