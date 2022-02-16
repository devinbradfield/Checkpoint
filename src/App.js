import React, { useState, useEffect } from "react";
import { formatData } from "./helperFunction";
import './App.css';





function App() {
  let [listState, setListState] = useState([])
  let [searchState, setSearchState] = useState('')

  const loadData = () => {
   fetch("http://52.26.193.201:3000/products/list")
  .then(response => {
     return response.json()
   })
   .then(data => {
     setListState(data)
     console.log(data)
   })
   

  }
  
useEffect(() => {
  loadData();
},[]);

const handleClick = value => {
  loadData(value)
}

  return (
    <div className="App">
      {listState.length > 0 && (
        <ul>
          {listState.map(listState => (
            <li key={listState.name}>{listState.name}</li>
          ))}
          
    <div onClick={()=> handleClick(listState.name)} key={listState.name}>
            {listState.name}
    </div>
        </ul>
        
      )}
    </div>

  );
}

export default App;


// fetch()
//    .then(response => response.json())
//    .then(data => SetListState(formatData)