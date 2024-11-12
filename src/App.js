import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

function App() {
  
  const [inputval, setInputVal] = useState(0);
  const onClickHandle = () => {
    setTimeout(()=>{
      console.log('Clicked');
      setInputVal((pre) => pre+1);
    },2000)
  };

  return (
    <div className="mainContainer">
      <div>
        ANS React Learning
        <h1>Count : {inputval}</h1>
      </div>
      <div className="mainComponent">
        {myData?.map(({ name, city, position }, index) => {
          return (
            <Main key={index} name={name} city={city} position={position} />
          );
        })}
      </div>
      <br />
      <br />
      {/* onclick function calll */}
      <button
        style={{
          frontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px",
        }}
        onClick={onClickHandle}
      >
        Click Me
      </button>

      <br />
      <br />
      {/* onChange function call */}
      {/* <p>{inputval}</p>
      <input
        type="text"
        style={{ border: "1px solid black", fontSize: "14px", padding: "10px" }}
        placeholder="Please write somthing here...!"
        onChange={(e)=>{        
          e.preventDefault();
          setInputVal(e.target.value);
        }}
      /> */}



    </div>
  );
}

export default App;
