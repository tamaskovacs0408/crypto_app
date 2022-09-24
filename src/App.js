import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App;
