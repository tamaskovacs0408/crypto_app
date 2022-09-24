import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import MainMenu from "./Components/MainMenu";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/menu" element={<MainMenu/>}/>
      </Routes>
    </>
  );
}

export default App;
