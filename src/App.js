import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
