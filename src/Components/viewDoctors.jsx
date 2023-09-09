import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "../Redux/Slices/doctor";
import axios from "axios";
import  { setDoctors } from "../Redux/Slices/doctor";
import Table from "react-bootstrap/esm/Table";
import { setError } from "../Redux/Slices/patient";




const ViewDoctors = () => {

const doctor = useSelector((state)=>state.doctor.doctors)
// console.log(doctor);
const loading=useSelector((state)=>state.doctor.loading);
const error=useSelector((state)=>state.doctor.error);
const dispatch=useDispatch()


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
    <div>
    <h1>Doctors</h1>
    {loading?<h3>loading</h3>:error?<h3>Error</h3>:(
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Specialisation</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        {doctor.map((data)=>(
          <tr key={data.id}>
            <td>{data.username}</td>
            <td>{data.qualification}</td>
            <td>{data.specialisation}</td>
            <td>{data.age}</td>
            <td>{data.address}</td>
          </tr>
          
         ))}
          
        </tbody>
      </Table>
    
      
    )}

      
    </div>
  )
}

export default ViewDoctors

