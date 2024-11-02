import "./App.css";
import Main from "./Components/Main";


const myData = [
  {
    name: "John Doe",
    position: "Developer",
    city: "Monaragala"
  },
  {
    name: "Jane Smith",
    position: "Designer",
    city: "Monaragala"
  },
  {
    name: "Alice Johnson",
    position: "Project Manager",
    city: "Monaragala"
  }
];

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
