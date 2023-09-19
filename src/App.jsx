import {Routes,Route} from 'react-router-dom'
import Header from "./Components/Header"
import AdminPage from "./Pages/adminPage"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Body from './Pages/Home'
import Viewpatients from './Components/Viewpatients'
import Medicines from './Pages/Medicines'
import ViewDoctors from './Components/viewDoctors'
import ViewMedicines from './Components/viewMedicines'
import ViewSinglePatient from './Components/viewSinglePatient'
import ViewSingleDoctor from './Components/viewSingleDoctor'
import ViewSingleMedicine from './Components/viewSingleMedicine'
import AddDoctors from './Components/AddDoctors'
import AddMedicines from './Components/AddMedicines'

function App() {

  return (
   
    <div>
    <Header/>
    <Routes>
    

    <Route  path="/"  element={<Body/>}/>
    <Route  path="/Register"  element={<Register/>}/>
    <Route  path="/Login"  element={<Login/>}/>
    <Route  path="/adminpage"  element={<AdminPage/>}/>
    <Route  path="/medicine"  element={<Medicines/>}/>
    

    <Route element={<AdminPage/>}>
    <Route  path="/viewpatients"  element={<Viewpatients/>}/>
    <Route  path="/viewdoctors"  element={<ViewDoctors/>}/>
    <Route  path="/viewmedicines"  element={<ViewMedicines/>}/>
    <Route  path="/viewsinglepatient/:id"  element={<ViewSinglePatient/>}/>
    <Route  path="/viewsingledoctor/:id"  element={<ViewSingleDoctor/>}/>
    <Route  path="/viewsinglemedicine/:id"  element={<ViewSingleMedicine/>}/>
    <Route  path="/adddoctors"  element={<AddDoctors/>}/>
    <Route  path="/adddmedicines"  element={<AddMedicines/>}/>
    </Route>
 
    </Routes>
  
    </div>

  
  )
}

export default App
