// import logo from './logo.svg'; 
import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//Router Dom
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  //Toggle Mode
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#003282"
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
  }
  //Alert
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)  //To make alert dissapear after 2 seconds
    }, 1500);

  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />}>

            </Route> */}

        {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />}> */}

        <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
        {/* </Route>
      </Routes> */}
      </div>
      {/* </Router > */}


    </>

  );

}

export default App;
