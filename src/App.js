import './App.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  } from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "./components/Navigation";
import AllCardDisplay from "./components/AllCardDisplay";
import CardItem from "./components/CardItem";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoaded,setLoad] = useState(false)
  const [resp,setResp]=useState([])
  const [cardDetails, setCardDetails] = useState({})
  const [query,setQuery] = useState("antarctica")

  useEffect(()=>{
    setLoad(false)
    search(query)
  },[query])

  async function search(query){
    const queryUrl = `https://images-api.nasa.gov/search?q=${query}`
      try{
        const response = await axios.get(queryUrl)
        setResp(response)
        setLoad(true)

      }catch(error){
        setLoad(false)
        console.log(error)
      }
  }

  return (
  <Router>
        <ScrollToTop cardDetails={cardDetails} query={query}>
          <Navigation query={query} searchQuery={setQuery} />
        {isLoaded ?
          <div className={"main-content"}>
            <Switch>
              <Route exact path={"/"}>
                Landing page here
              </Route>

              <Route path={"/home"}>
                <AllCardDisplay data={resp.data.collection.items} setCard={setCardDetails} />
              </Route>

              <Route path={"/pin/:nasa_id"}>
                <CardItem card={cardDetails} />
                <AllCardDisplay data={resp.data.collection.items} setCard={setCardDetails} />
              </Route>

              <Route path={"*"}>
                <h1>Error! go back home pls</h1>
              </Route>
            </Switch>
          </div>
            :
            <h2>notLoaded, will be replaced by skeleton</h2>
        }
        </ScrollToTop>

  </Router>
  );

}

export default App;
