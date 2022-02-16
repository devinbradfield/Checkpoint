import React, { useState, useEffect } from "react";
import { formatData } from "./helperFunction";
import './App.css';





function App() {
  let [listState, setListState] = useState([])
  let [searchState, setSearchState] = useState('')
  
const url = "http://52.26.193.201:3000/products/list"

   useEffect(() => {
     loadData();
  },[]);

  const loadData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    formatData(data)
    console.log(data)
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          {formatData}
        </p>
        
      </header>
    </div>
  );
}

export default App;


// fetch()
//    .then(response => response.json())
//    .then(data => SetListState(formatData)