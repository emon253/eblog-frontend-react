import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Singup";
import Base from "./Component/Base";
import CustomNavBar from "./Component/CustomNavBar";
import UserDashboard from "./Pages/user-pages/UserDashboard";
import PrivateRoute from "./Component/PrivateRoute";
import UserProfile from "./Pages/user-pages/UserProfile";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<PrivateRoute/>}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
