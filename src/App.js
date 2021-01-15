import axios from "axios";
import { useState, useEffect } from "react";
import Header from './components/Header';
import Pokemon from './components/Pokemon';
function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("")
  const [list, setList] = useState([]);
  const retrive = async () => {
    const response = await axios(url);
    
    setNextUrl(response.data.next);
    setPreviousUrl(response.data.previous);
    setList(response.data.results);
  };

  useEffect(() => {
    retrive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  function handleChange(next){
    next ? setUrl(nextUrl)  : setUrl(previousUrl);
  }
  return (
    <>
    <Header/>
      <ul>
        {window.console.log(list)}
        {list.map((item, i) => (
          <li key={i}>
            {/* <Pokemon name={item.name} /> */}

            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`}/> */}
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => handleChange(true)} hidden={!nextUrl}>proxima</button>;
      <button onClick={()=> handleChange(false)} hidden={!previousUrl}>anterior</button>;
      
    </>
  );
}

export default App;
