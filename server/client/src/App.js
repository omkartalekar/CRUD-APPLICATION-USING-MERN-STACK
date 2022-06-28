import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"


import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';

function App() {
  return (
   
      <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element={<CodeforInterview/>} />
      <Route path='/Add' element={<AddUser/>} />
      <Route path='/All' element={<AllUsers/>} />
      <Route path='/Edit/:id' element={<EditUser/>} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
