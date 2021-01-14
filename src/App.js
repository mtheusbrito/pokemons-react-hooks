import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [nextUrl, setNextUrl] = useState("");
  const [previousUrl, setPreviousUrl] = useState("");
  const [list, setList] = useState([]);
const retrive = async ( next) => {
  let response ;
    if(next){ 
    response = await axios(nextUrl ? nextUrl : "https://pokeapi.co/api/v2/pokemon");
    }else{
      response = await axios(previousUrl ? previousUrl : "https://pokeapi.co/api/v2/pokemon");
    }
     
      window.console.log(response);
      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous);
      setList(response.data.results)
      
    };

    
  useEffect(() => {
    retrive(true);
    
  }, []);
  

  return <>
  <ul>{list.map((item, i) => (<li key={i}>
    <a href={item.url}>{item.name}</a>
  </li>))}</ul>
  
  <button onClick={()=>retrive(true)}>proxima</button>;
  <button onClick={()=>retrive(false)} hidden={!previousUrl}>anterior</button>;
  </> 
}

export default App;
