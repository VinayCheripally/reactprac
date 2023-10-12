import React, { useState } from "react";
import { getdetails } from "./services/getdetails";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSearch = (searchdata) => {
    getdetails(searchValue)
      .then((data) => {
        setResponseData(data);
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <div>
      <input
        type="number"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>search</button>
      {responseData && <div>{responseData.name}</div>}
    </div>
  );
}
