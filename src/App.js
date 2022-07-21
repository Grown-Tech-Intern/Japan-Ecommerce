import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Login from "./Components/Form/Login/Login.js";
import Register from "./Components/Form/Register/Register.js";
import Verification from "./Components/Verification/Verification.js";
import Phone from "./Components/Verification_Steps/Step_1/Phone.js";
import Password from "./Components/Verification_Steps/Step_2/Password.js";
import Finish from "./Components/Verification_Steps/Step_3/Finish.js";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/password" element={<Password />} />
        <Route path="/finish" element={<Finish/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
