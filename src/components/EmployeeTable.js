import React from "react";
import Moment from "moment";

function EmployeeTable(props) {
 
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name
            <button style={btnStyle} onClick={() => props.handleSort()}> Sort</button></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(employee => {
          const newDob = Moment(employee.dob.date).format("LL");
          return (
            <tr key={employee.phone}>
              <td><img alt="employee" src={employee.picture.thumbnail}/></td>
              <td>{employee.name.first + " " + employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{newDob}</td> 
            </tr>
          )
        })}
        
      </tbody>
    </table>
  )
}

const btnStyle = {
    backgroundColor: "orange",
    border: "none",
    color: "white",
    padding: "2px 3px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "8px",
    marginLeft: "2px"
}

export default EmployeeTable;