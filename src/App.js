import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

function App() {
  return (
    <div>
      And React Learning
      <h1>Amith</h1>
      {myData?.map(({name,city,position},index) => {
        return <Main key={index} name={name} city={city} position={position}/>
      })}
    </div>
  );
}

export default App;
