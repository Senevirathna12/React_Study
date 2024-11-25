import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "setImage") {
    return { ...state, image: action.data };
  } else if (action.type === "setName") {
    return { ...state, name: action.data };
  } else if (action.type === "setCity") {
    return { ...state, city: action.data };
  } else if (action.type === "setPosition") {
    return { ...state, position: action.data };
  } else if (action.type === "setArray") {
    return { ...state, dataArray: [...state.dataArray, action.data] };
  } else {
    return state;
  }
};

const App = () => {
  const [state, setState] = useReducer(reducer, {
    image: "",
    name: "",
    city: "",
    position: "",
    dataArray: [],
  });
  console.log(state);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter image url"
        value={state.image}
        onChange={(e) => {
          setState({
            type: "setImage",
            data: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={state.name}
        onChange={(e) => {
          setState({
            type: "setName",
            data: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Enter your city"
        value={state.city}
        onChange={(e) => {
          setState({
            type: "setCity",
            data: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Enter your position"
        value={state.position}
        onChange={(e) => {
          setState({
            type: "setPosition",
            data: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          setState({
            type: "setArray",
            data: {
              image: state.image,
              name: state.name,
              city: state.city,
              position: state.position,
            },
          });
        }}
      >
        Set Data
      </button>

      <div>
        {state.dataArray.length > 0 &&
          state.dataArray.map(({image, name, city, position },index) => {
            return(
              <div key={index}>
                <img src={image} alt={name} style={{width:'200px', height:'200px', marginTop:'20px'}}/>
                <h2>{name}</h2>
                <h2>{city}</h2>
                <h2>{position}</h2>
              </div>
            )

          })}
      </div>
    </div>
  );
};

export default App;
