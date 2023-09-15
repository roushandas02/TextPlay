import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  // Switch, ( changed to 'Routes' in v6 of 'react-router-dom')
  Routes,
  Route
} from "react-router-dom";
import Typespeed from './Components/Typespeed';
import Textarea from './Components/Textarea';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Copyright from './Components/Copyright';


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        {/* <Alert alert={alert} /> */}
        <div className="container">
        
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>} /> */}
            <Route path="/typespeed" element={<Typespeed />} />
            <Route path="/textarea" element={<Textarea />} />
          </Routes>
        </div>
        <Copyright />
      </Router>
    </>
  );
}

export default App;
