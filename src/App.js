import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

function App() {
  const [name, setName] = useState('Amith');
  const [myDataState, setMyDataState] = useState(myData);
  const changeNameClickHandle = () => {
    setName('Chamara');
    setMyDataState([
      ...myDataState,
      {
        name: "Amith N Senevirathna",
        position: "Full Stack developer",
        city: "Monaragala"   
      }
    ])
  }

  return (
    <div className="mainContainer">
      <div>
        ANS React Learning
        <h1>{name}</h1>
      </div>
      <div className="mainComponent">
        {myDataState?.map(({name,city,position},index) => {
          return (
            <Main key={index} name={name} city={city} position={position}/>
          )
        })}
      </div>
      <br />
      <br />
      <button style={
        {
          frontSize: '12px',
          border:'1px solid red',
          padding: '7px 12px'
        }
      } onClick={changeNameClickHandle}>
        Click Me
      </button>
      
    
    </div>
  );
}

export default App;
