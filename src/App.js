import { Fragment, useState } from "react";
import "./App.css";
import Unit from "./Components/Unit";
import Input from "./Components/Input";
import Header from "./Components/Header";

function App() {
  const [inputData, setInputData] = useState({
    imageUrl: "",
    name: "",
    city: "",
    position: "",
  });
  const [myData, setMydata] = useState([]);

  return (
    <Fragment>
      <Header/>
      <div className="main__container">
        <div className="main_left">
          <Input 
            imageUrl={inputData.imageUrl} 
            name={inputData.name}
            city={inputData.city}
            position={inputData.position}
            setInputData={setInputData} 
          />

          <button
            onClick={() => {
              setMydata((pre) => [
                ...pre,
                {
                  image: inputData.imageUrl,
                  name: inputData.name,
                  city: inputData.city,
                  position: inputData.position,
                },
              ]);

              setInputData({
                imageUrl: "",
                name: "",
                city: "",
                position: "",
              });
            }}
          >
            Submit
          </button>
        </div>
        <div className="main_right">
          {myData?.map(({ image, name, city, position }, index) => {
            return (
              <Unit
                image={image}
                name={name}
                city={city}
                position={position}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
