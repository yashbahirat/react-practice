// import "./App.css";

import React, { useState } from 'react'
import Alert from './components/Alert';
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      showAlert("Dark Mode Has Been Enabled", "success")
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode("light");
      showAlert("Light Mode Has Been Enabled", "success")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TexUtils - Light Mode"
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    {/* <Router>
      <div> */}
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <NavBar /> */}
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter The Text To Analyse Below"/> 
      {/* <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </div>
    </Router> */}
    </>
  );
}

export default App;
