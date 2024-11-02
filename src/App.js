import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

function App() {
  return (
    <div>
      ANS React Learning
      <h1>Amith</h1>
      <div className="mainComponent">
        {myData?.map(({name,city,position},index) => {
          return (
            <Main key={index} name={name} city={city} position={position}/>
          )
        })}
      </div>
      
    
    </div>
  );
}

export default App;
