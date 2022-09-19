import './App.scss';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import MainMenu from './Components/MainMenu/MainMenu';

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
