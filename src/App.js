import { useState } from "react";
import "./App.css";
import Unit from "./Components/Unit";

function App() {
  const [inputData, setInputData] = useState({
    imageUrl: "",
    name: "",
    city: "",
    position: "",
  });

  const [myData, setMydata] = useState([]);
  console.log(myData)
  return (
    <div className="main__container">
      <div className="main_left">
        <input
          type="text"
          placeholder="Please input image url"
          value={inputData.imageUrl}
          onChange={(e) => {
            e.preventDefault();
            setInputData((pre) => ({
              ...pre,
              imageUrl: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Please input your name"
          value={inputData.name}
          onChange={(e) => {
            e.preventDefault();
            setInputData((pre) => ({
              ...pre,
              name: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Please input your city"
          value={inputData.city}
          onChange={(e) => {
            e.preventDefault();
            setInputData((pre) => ({
              ...pre,
              city: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Please input your position"
          value={inputData.position}
          onChange={(e) => {
            e.preventDefault();
            setInputData((pre) => ({
              ...pre,
              position: e.target.value,
            }));
          }}
        />
        <button
          onClick={() => {
            setMydata((pre) => [...pre,{
              image :inputData.imageUrl,
              name:inputData.name,
              city:inputData.city,
              position: inputData.position
            }]);

            // setInputData((pre)=>{
            //   if(pre.imageUrl.length > 0){
            //     return {
            //       ...pre,
            //       imageUrl :''
            //     } 
            //   }else{
            //     return pre;
            //   }
            // });
            // setInputData((pre)=> (pre.name.length> 0 ?({...pre ,
            //   name :''
            // }): pre));

            // setInputData((pre) => (pre.city.length > 0 ? ({
            //   ...pre,
            //   city:''
            // }): pre));

            // setInputData((pre)=>(pre.position.length > 0 ?({
            //   ...pre,
            //   position :''
            // }) : pre ))
            setInputData({
              imageUrl :'',
              name:'',
              city:'',
              position:''
            })
          }}
        >
          Submit
        </button>
      </div>
      <div className="main_right">
        {myData?.map(({image, name, city, position }, index) => {
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
  );
}

export default App;
