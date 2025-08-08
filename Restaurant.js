// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <hi>Hello Restaurant</hi>
//     </>
//   )
// }

// export default App;






import React,{useState} from "react";
import "./style.css";
import  Menu  from "./menuApi.js";


const Restaurant=()=>{

    const[menuData, setMenuData]=useState(Menu);
    console.log(menuData);

  return (
    <>
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">1</span>
          <span className="card-author subtle" style={{color:"red"}}>
          Breakfast
          </span>
          <h2 className="card title">Maggi</h2>
          <span className="card description subtle">I love Maggi really</span>
          <div className="card-read">Read</div>
          </div>
          

          <span className="card tag subtle"> Order Now </span>

      

      </div>
      </div>
      </>
  );
};

export default Restaurant;      