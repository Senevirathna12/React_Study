import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [apiId, setApiId] = useState("1");
  const [data ,setData] =useState({});
  const [search ,setSerch] = useState(0);

  // console.log(apiId);
  // console.log(data);

  useEffect(()=>{
    console.log('use effect running..');
    const apiCall = async ()=>{
      console.log('function api call running')
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${apiId}`);
      const data = await res.json();
      if(data){
        setData(data);
      }
    }

    if(apiId.length > 0 && Number(apiId) >0 && Number(apiId) <= 100){
      console.log('if condition running..')
      apiCall();
    }

    // cleanup function
    return () => {
      console.log('cleanUp')
      apiCall();
    }
    // eslint-disable-next-line
  },[search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter id"
        value={apiId}
        onChange={(e) => {
          setApiId(e.target.value);
        }}
      />
      <button onClick={()=> setSerch(pre => pre === 0 ? 1 : 0)}>Search</button>
      {data && <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>}


    </div>
  );
};

export default App;
