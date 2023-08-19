import './App.css';
import HomePage from './pages/HomePage';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Pannier from './pages/Pannier';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHome from './components/AdminHome';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route path="/" element={ <HomePage/>   }/>
         <Route path="/logIn" element={ <Login/>   }/>
         <Route path="/register" element={ <Register/>   }/>
         <Route path="/admin" element={ <Admin/>   }/>
         <Route path="/pannier" element={ <Pannier/>   }/>
        <Route path="/adminHome" element={ <AdminHome/>   }/> 
           </Routes>
        </BrowserRouter>
        <ToastContainer />
    </div>
  );
}
export default App;