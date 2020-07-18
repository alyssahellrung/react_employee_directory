import React from "react";

function Header() {
  return(
    <header style={header}>
      <h1>Employee Directory</h1>
      <p>Click on the sort button to filter by last name or use the search box to search by first name.</p>
    </header>
  )
}

  const header = {
    backgroundColor: "#02075D",
    color: "#FFFFFF",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "10px",
    borderBottom: "3px solid red"
  }



export default Header;