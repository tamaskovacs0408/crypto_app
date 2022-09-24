import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
