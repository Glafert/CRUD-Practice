import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/addEmployee.js";
import EmployeeList from "./components/EmployeeList.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList />}></Route>
        <Route path="/add" element={<AddEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
