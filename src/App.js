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
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [isLoaded,setLoaded] = useState(false)
  const [resp,setResp]=useState({})
  const [cardDetails, setCardDetails] = useState({})
  const [query,setQuery] = useState("antarctica")
  const [serverError,setServerError] = useState(false)

//takes care of reload resulting in re-initialising of state of query and cardDetails
  useEffect( ()=>{
    const parsedDetail = localStorage.getItem("cardDetails")
    const parsedQuery = localStorage.getItem("query")
    // console.log("getting local storage")
    // console.log(JSON.parse(parsedDetail))
    // console.log(parsedDetail)
    // console.log(parsedQuery)
    setCardDetails(JSON.parse(parsedDetail))
    setQuery(parsedQuery)
  },[])

  //sets the local storage of the indiv card detail clicked and sets the query
  useEffect(()=>{
    localStorage.setItem("cardDetails",JSON.stringify(cardDetails))
    localStorage.setItem("query",query)
    // console.log("setting local storage")
  },[cardDetails,query])


  useEffect( ()=>{
    search(query)
    console.log("query is searching")

  },[query])

  async function search(query){
    const queryUrl = `https://images-api.nasa.gov/search?q=${query}`
      try{
        const response = await axios.get(queryUrl)
        setResp(response)
        setLoaded(true)
        // console.log("query is searched")

      }catch(error){
        setLoaded(true)
        setServerError(true)
        console.log(error)
      }
  }

  // let top = window.scrollTop
  // let divht = window.scrollHeight
  // let browserht = window.clientHeight
  //
  // console.log(top)
  // console.log(divht)
  // console.log(browserht)

  return (
  <Router>
    <ScrollToTop query={query} cardDetails={cardDetails}>
      <Navigation query={query} searchQuery={setQuery} />

      {(()=>{
        if(isLoaded && query){
          return(
              <div className={"main-content"}>
                <Switch>
                  <Route exact path={"/"}>
                    Landing page here
                  </Route>

                  <Route exact path={"/home"}>
                    <AllCardDisplay data={resp.data.collection.items} cardDetails={cardDetails} setCardDetails ={setCardDetails} />
                  </Route>

                  <Route path={"/pin/:nasa_id"}>
                      <>
                      <CardItem query={query} setQuery={setQuery} cardDetails={cardDetails}  />
                    <AllCardDisplay data={resp.data.collection.items} setCardDetails={setCardDetails} />
                    </>
                  </Route>

                  <Route path={"/save"}>
                    <h1>Saved posts page</h1>
                  </Route>

                  <Route path={"*"}>
                    <h1>Error! go back home pls</h1>
                  </Route>
                </Switch>
              </div>
              )
        }else if(!isLoaded && !serverError){
          return(<LoadingAnimation/>)
        }else if(isLoaded && serverError){
          return(<h2>Please Search Again!</h2>)
        }
      })()}


      {/*{isLoaded ?*/}
      {/*  <div className={"main-content"}>*/}
      {/*  <Switch>*/}
      {/*  <Route exact path={"/"}>*/}
      {/*  Landing page here*/}
      {/*  </Route>*/}

      {/*  <Route path={"/home"}>*/}
      {/*  <AllCardDisplay data={resp.data.collection.items} setCard={setCardDetails} />*/}
      {/*  </Route>*/}

      {/*  <Route path={"/pin/:nasa_id"}>*/}
      {/*  <CardItem card={cardDetails} />*/}
      {/*  <AllCardDisplay data={resp.data.collection.items} setCard={setCardDetails} />*/}
      {/*  </Route>*/}

      {/*  <Route path={"*"}>*/}
      {/*  <h1>Error! go back home pls</h1>*/}
      {/*  </Route>*/}
      {/*  </Switch>*/}
      {/*  </div>*/}
      {/*:  */}
      {/*<h2> Loading in progress! </h2>*/}

      {/*}}*/}


    </ScrollToTop>

  </Router>
  );

}

export default App;
