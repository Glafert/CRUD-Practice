import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:3000/employees");
    setEmployee(response.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half ">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employees, index) => (
              <tr key={employees.id}>
                <td>{index + 1}</td>
                <td>{employees.name}</td>
                <td>{employees.email}</td>
                <td>{employees.gender}</td>
                <td>{employees.address}</td>
                <td>
                  <button class="button is-info">Edit</button>
                  <button class="button is-success">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
