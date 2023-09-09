import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setMedicines } from "../Redux/Slices/medicine";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const ViewMedicines = () => {
    const medicine= useSelector ((state)=>state.medicine.medicines)
    const loading=useSelector((state)=>state.medicine.loading)
const error=useSelector((state)=>state.medicine.error)
const dispatch=useDispatch()
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
{loading?<h3>Loading</h3>:error?<h3>Error</h3>:(
    <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {medicine.map((data)=>(<tr key={data.id}>
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
