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
import InfiniteDisplay from "./components/InfiniteDisplay"
import InfinityCards from "./components/InfinityCards";
import {addQuery, checkQuery, getData, uploadData} from "./lib/library"


function App() {
  const [isLoaded,setLoaded] = useState(false)
  // const [resp,setResp]=useState({})
  const [cardDetails, setCardDetails] = useState(null)
  const [query,setQuery] = useState("antarctica")
  const [serverError,setServerError] = useState(false)
  const [queriesDb,setQueriesDb] = useState(true)

  const [loadedPhotos,setLoadedPhotos]=useState([])
  const [toBeloaded,setToBeLoaded] = useState([])
  const [page,setPage]=useState(1)
  const [lastVisible,setLastVisible] = useState(null)

// // takes care of reload resulting in re-initialising of state of query and cardDetails
//   useEffect( ()=>{
//     if(cardDetails){
//       const parsedDetail = sessionStorage.getItem("cardDetails")
//       const parsedQuery = sessionStorage.getItem("query")
//       setCardDetails(JSON.parse(parsedDetail))
//       setQuery(parsedQuery)
//     }
//   },[])
//
//   //sets the session storage of the indiv card detail clicked and sets the query
//   useEffect(()=>{
//     sessionStorage.setItem("cardDetails",JSON.stringify(cardDetails))
//     sessionStorage.setItem("query",query)
//   },[cardDetails])

  useEffect( ()=>{
    console.log("changing query")
    checkQuery(query,setQueriesDb).then(() => {
      if(queriesDb===true){
        getData(query, 10, lastVisible, setLastVisible, setToBeLoaded).then(()=>{
          setLoadedPhotos([])
          setPage(1)
          setLoaded(true)
        })
      }else{ ///query is not in DB
        search(query).then(()=>{
          setLoaded(true)
          console.log("getting data")
          getData(query, 10, lastVisible, setLastVisible, setToBeLoaded)
        })
      }
    })

  },[query])


  useEffect(()=>{
    console.log("getting data for ",query)
    console.log("page num is", page)
    console.log("loadedPhotos is",loadedPhotos)
    console.log("toBeloaded is",toBeloaded)
    getData(query, 10, lastVisible, setLastVisible, setToBeLoaded)

  },[page])

  useEffect( ()=>{
    if(! toBeloaded.some(el=>loadedPhotos.includes(el))) {
      setLoadedPhotos(prevState => [...prevState, ...toBeloaded])
    }
  },[toBeloaded])



  async function search(query){
    const queryUrl = `https://images-api.nasa.gov/search?q=${query}`
    // console.log(query)
    // console.log(queriesDb)
      try{
        //check if data query exists in DB.
        // if it doesnt, get the data from API and upload the data to firestore
        // if(queriesDb === false){
          addQuery(query)
          const response = await axios.get(queryUrl)
          response.data.collection.items.forEach((dataItem,idx)=>{
            uploadData(query,dataItem,idx)
          })

        // }
        setLoaded(true)
      }catch(error){
        setLoaded(true)
        setServerError(true)
        console.log(error)
      }
  }

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
                    {/*<AllCardDisplay query={query} data={resp.data.collection.items} cardDetails={cardDetails} setCardDetails ={setCardDetails} />*/}
                    {/*<InfiniteDisplay query={query} />*/}
                    <InfinityCards query={query} setCardDetails={setCardDetails} loadedPhotos={loadedPhotos} toBeloaded={toBeloaded} setPage={setPage} setLoadedPhotos={setLoadedPhotos}/>
                  </Route>

                  <Route path={"/pin/:nasa_id"}>
                      <>
                      <CardItem query={query} setQuery={setQuery} cardDetails={cardDetails}  />
                    {/*<AllCardDisplay query={query} data={resp.data.collection.items} setCardDetails={setCardDetails} />*/}
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

    </ScrollToTop>

  </Router>
  );

}

export default App;
