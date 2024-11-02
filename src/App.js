import "./App.css";
import Main from "./Components/Main";


const myObj = [
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
      <Main name='Silva' city='Matara' position='Mobile App Developer'>
        <h5>This is a childeren</h5>
      </Main>
      <Main name='Chamara' city='Kandy' position='Web developer'/>
      <Main name='Senevirathna' city='Colombo' position='App developer'/>
     
    </div>
  );
}

export default App;
