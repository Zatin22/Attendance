import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Services from "./pages/Saved";
import Home from "./pages/Home";
// import Selfservices from "./pages/Users";
import Organisation from "./pages/Organisation";
import Employee from "./pages/organisation/employee/Employee";
import Location from "./pages/organisation/Location";
import Department from "./pages/organisation/department/Department";
import Designation from "./pages/organisation/Designation";
import Birthdayfolks from "./pages/organisation/Birthdayfolks";
import Newhires from "./pages/organisation/Newhires";
import Organizationsetting from "./pages/organisation/Organizationsetting";

import Attendence from "./pages/Attendence";
import Listofattendence from "./pages/attendence/Listofattendence";
import Regularization from "./pages/attendence/Regularization";
import Report from "./pages/attendence/Report";
import Attendencesetting from "./pages/attendence/Attendencesetting";

import Leave from "./pages/Leave";
import Listview from "./pages/leaves/Listview";
import Leaveapplication from "./pages/leaves/Leaveapplication";
import Leavesetting from "./pages/leaves/Leavesetting";

// import Trainingmodule from "./pages/Order";
import Setting from "./pages/Setting";


function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          {/* <Route path="/saved" element={<Services />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/users" element={<Selfservices />} /> */}
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/organisation/employee/Employee" element={<Employee />} />
          <Route path="/organisation/Location" element={<Location/>} />
          <Route path="/organisation/department/Department" element={<Department/>} />
          <Route path="/organisation/Designation" element={<Designation/>} />
          <Route path="/organisation/Birthdayfolks" element={<Birthdayfolks/>} />
          <Route path="/organisation/Newhires" element={<Newhires/>} />
          <Route path="/organisation/Organizationsetting" element={<Organizationsetting/>} />

          <Route path="/attendence" element={<Attendence />} />
          <Route path="/attendence/Listofattendence" element={<Listofattendence />} />
          <Route path="/attendence/Regularization" element={<Regularization />} />
          <Route path="/attendence/Report" element={<Report />} />
          <Route path="/attendence/Attendencesetting" element={<Attendencesetting />} />

          <Route path="/leave" element={<Leave />} />
          <Route path="/leaves/Listview" element={<Listview />} />
          <Route path="/leaves/Leaveapplication" element={<Leaveapplication />} />
          <Route path="/leaves/Leavesetting" element={<Leavesetting />} />

          {/* <Route path="/order" element={<Trainingmodule />} /> */}
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
