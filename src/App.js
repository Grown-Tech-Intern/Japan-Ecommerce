import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Login from "./Components/Form/Login/Login.js";
import Register from "./Components/Form/Register/Register.js";
import Verification from "./Components/Verification/Verification.js";
import Phone from "./Components/Verification_Steps/Step_1/Phone.js";
import Password from "./Components/Verification_Steps/Step_2/Password.js";
import Finish from "./Components/Verification_Steps/Step_3/Finish.js";

import Home_header from "./Components/Home/Home-Header/Home_header.js";
import Menu from "./Components/Home/Menu/Menu.js";
import Nav from "./Components/Home/Navbar/Nav.js";
import Slider from "./Components/Home/Slider/Slider.js";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* ----------- Login & Register ----------- */}
      {/* <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/password" element={<Password />} />
          <Route path="/finish" element={<Finish/>} />
        </Routes>
        <Footer /> */}

      {/* ----------- Home Page ----------- */}
      <Home_header />
        {/* <Menu /> */}
        <Nav />
        {/* <Routes>
          <Route path="/" element={<Slider />} />
        </Routes> */}

    </div>
  );
}

export default App;
