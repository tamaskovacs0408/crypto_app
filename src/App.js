import './App.scss';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import MainMenu from './Components/MainMenu';

function App() {
  return (
    <div className="App">
      <SignUp />
      <LogIn />
      {/* <MainMenu /> */}
    </div>
  );
}

export default App;
