import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

function App() {
  return (
    <div className="mainContainer">
      <div>
        ANS React Learning
        <h1>Amith</h1>
      </div>
      <div className="mainComponent">
        {myData?.map(({name,city,position},index) => {
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
      }>
        Click Me
      </button>
      
    
    </div>
  );
}

export default App;
