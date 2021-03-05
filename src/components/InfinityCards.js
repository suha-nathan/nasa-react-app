import React, {useCallback, useEffect, useState} from 'react';
import SmallCard from "./SmallCard";
import {Card, CardColumns, Image} from "react-bootstrap";
import {getData} from "../lib/library";
import {LinkContainer} from "react-router-bootstrap";

export default function InfinityCards({query,setCardDetails,loadedPhotos,toBeloaded,setPage,setLoadedPhotos}) {

    // const [loadedPhotos,setLoadedPhotos]=useState([])
    // const [toBeloaded,setToBeLoaded] = useState([])
    // const [page,setPage]=useState(1)
    // const [lastVisible,setLastVisible] = useState(null)
    const newref = useCallback( node=>{
        if (node!= null){
            initObserver(node)
        }
    },[])

    // useEffect(()=>{
    //     console.log("getting data for ",query)
    //     console.log("page num is", page)
    //     console.log("loadedPhotos is",loadedPhotos)
    //     console.log("toBeloaded is",toBeloaded)
    //     getData(query, 10, lastVisible, setLastVisible, setToBeLoaded)
    // },[page])
    //
    // useEffect(()=>{
    //     setLoadedPhotos([])
    //     getData(query, 10, lastVisible, setLastVisible, setToBeLoaded)
    // },[query])
    //
    // useEffect( ()=>{
    //     if(! toBeloaded.some(el=>loadedPhotos.includes(el))) {
    //         setLoadedPhotos(prevState => [...prevState, ...toBeloaded])
    //     }
    // },[toBeloaded])

    function handleObserver(entities,observer){
        if (entities[0].intersectionRatio>=0.9){
            setPage(count=>count+1)
        }
    }

    function initObserver(node){
        console.log("initialising observer")
        let options={
            root:null,
            rootMargin:"0px",
            threshold:1
        }

        let observer = new IntersectionObserver(
            handleObserver,options
        )
        if(node){
            observer.observe(node)
        }
    }

    // console.log(loadedPhotos)
    // console.log(toBeloaded)
    // console.log(query)
    return (
        <CardColumns className={"all-columns"}>
            <>
                {/*<div>loaded photos</div>*/}
                {loadedPhotos.map((el, idx) => (
                    el.href &&
                    <div key={idx}>
                        {el.count == toBeloaded.length-1 ?
                            <div ref={newref}>
                                <SmallCard  detail={el}  setCard={setCardDetails} url ={ `/pin/${el.nasa_id}`}/> </div>
                            :
                            <div>
                                <SmallCard detail={el} setCard={setCardDetails} url ={ `/pin/${el.nasa_id}`}/></div>
                        }
                    </div>
                    // <div key={idx}>
                    //     <SmallCard detail={el} setCard={setCardDetails} url ={ `/pin/${el.nasa_id}`}/>
                    // </div>
                ))}
            </>
            <>
                {/*<h3>to be loaded photos</h3>*/}
                {toBeloaded.map((el,idx)=>(
                    el.href &&
                        <div key={idx}>
                        {el.count == toBeloaded.length-1 ?
                            <div ref={newref}>
                                <SmallCard  detail={el}  setCard={setCardDetails} url ={ `/pin/${el.nasa_id}`}/> </div>
                            :
                            <div>
                                <SmallCard detail={el} setCard={setCardDetails} url ={ `/pin/${el.nasa_id}`}/></div>
                        }
                        </div>
                ))
                }
            </>

        </CardColumns>
    );
}
