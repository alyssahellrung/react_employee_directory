import React from "react";

function SearchBar(props) { 

  return (
    <form>
      <div className="form-group">
        <input
          style={inputStyle}
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  )
}

const inputStyle = {
  padding: "6px",
  width: "20%",
  border: "1px solid grey",
  marginTop: "20px",
  marginRight: "auto",
  marginLeft: "auto",
  fontSize: "17px"
}


export default SearchBar;