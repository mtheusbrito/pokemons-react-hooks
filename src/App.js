import axios from "axios";
import { useState, useEffect } from "react";
import Header from './components/Header';
import { List, Item, Button } from './styles';
function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("")
  const [list, setList] = useState([]);
 
  const retrive = async () => {
    const response = await axios(url);
    
    setNextUrl(response.data.next);
    setPreviousUrl(response.data.previous);
    const { results } = response.data;
    
    results.map((p, i) =>{
      const id = p.url.split('/')[6];
      return results[i].image =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    })
    setList(results);
    
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
      <div>
      <List>
        {list.map((item, i) => (
          <Item key={i}>
             <img src={item.image} alt={item.name} />
             <a href={item.url}>{item.name}  </a>
          </Item>
        ))}
      </List>
      <Button onClick={()=> handleChange(false)} hidden={!previousUrl}> &lt; anterior</Button>
      <Button onClick={() => handleChange(true)} hidden={!nextUrl}>proxima &gt; </Button>
      
      </div>
    </>
  );
}

export default App;
