import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ManageEmployee from "./pages/ManageEmployee"
import EmployeeLogin from "./pages/EmployeeLogin";
import MyAppointments from "./pages/MyAppointments";
import AddNewEmployee from "./pages/AddNewEmployee";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App top-section bg-gradient-to-t from-gradientblue to-gradientpink h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/admin"
            element = {<ManageEmployee/>}
          />
          <Route
            path="/employeelogin"
            element = {!user ? <EmployeeLogin/> : <Navigate to="/MyAppointments" />}
          />
          <Route
            path="/MyAppointments"
            element = {user ? <MyAppointments/> : <Navigate to="/employeelogin" />}
          />
          <Route
            path="/AddNewEmployee"
            element = {<AddNewEmployee/>}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
