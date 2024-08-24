import React,{ useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mood";
      showAlert("Dark mood has been enabled")
      setInterval(() =>{
        document.title = "TextUtils is Amazing Mood";
      }, 2000);
      setInterval(() =>{
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mood";
      showAlert("White mood has been enabled")
    }
  };

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
    <Routes>
      <Route path='/TextUtils' element={<TextForm showAlert={showAlert} mode={mode} />} />
      {/* <Route path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces, speak, convert to uppercase, convert to lower case." mode={mode} />} /> */}
      <Route path='/About' element={<About mode={mode}/>} />
    </Routes>
    </BrowserRouter>
    
      {/* <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}/>
        <Alert alert={alert}
      />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces, speak, convert to uppercase, convert to lower case." mode={mode} />
        <About heading="About us" mode={mode} toggleMode={toggleMode} />
      </div> */}
    </>
  );
};

export default App;
