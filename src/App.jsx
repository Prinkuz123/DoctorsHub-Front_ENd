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
import EditPage from './Components/editPage'

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
    <Route  path="/viewpatients/:id"  element={<EditPage/>}/>
    </Route>
 
    </Routes>
  
    </div>

  
  )
}

export default App
