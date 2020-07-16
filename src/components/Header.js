import React from "react";

function Header() {
  return(
    <header style={header}>
      <h1>Employee Directory</h1>
      <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
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