import React, {useCallback, useEffect} from 'react';
import SmallCard from "./SmallCard";
import { Col, Row} from "react-bootstrap";


export default function InfinityCards({query,setCardDetails,loadedPhotos,toBeloaded,setPage,setLoadedPhotos}) {

    // const [loadedPhotos,setLoadedPhotos]=useState([])
    // const [toBeloaded,setToBeLoaded] = useState([])
    // const [page,setPage]=useState(1)
    // const [lastVisible,setLastVisible] = useState(null)

    let observer,globalNode

    const newref = useCallback( node=>{
        if (node!= null){
            globalNode = node
            initObserver(globalNode)
            // console.log(globalNode)
        }

    },[loadedPhotos])

    useEffect(()=>{
        return ()=>{
            if(globalNode){
                // console.log("removing observer")
                observer.unobserve(globalNode)
            }
        }
    })

    function handleObserver(entities,observer){
        if (entities[0].intersectionRatio>=0.9){
            // console.log("increasing page")
            setPage(count=>count+1)
        }
    }

    function initObserver(node){
        // console.log("initialising observer")
        let options={
            root:null,
            rootMargin:"0px",
            threshold:1
        }

        observer = new IntersectionObserver(
            handleObserver,options
        )
        if(node){
            observer.observe(node)
        }
    }

    return (
        <>
        <h4>Showing Results for: {query} </h4>
        <Row className={"all-columns"} data-masonry='{"percentPosition": true }' style={{position:"relative"}} >
            {loadedPhotos.map((el,idx)=>(
                // el.href &&
                idx === loadedPhotos.length-1?
                    <Col className="nasa-card-item" xs={6} md={4} xl={3} key={idx} ref={newref}>
                        <SmallCard  detail={el}  setCard={setCardDetails} url ={ `/pin/${el.nasa_id}`}/> </Col>
                    :
                    <Col className="nasa-card-item" xs={6} md={4} xl={3}  key={idx}>
                        <SmallCard detail={el} setCard={setCardDetails} url ={ `/pin/${el.nasa_id}`}/></Col>

            ))}

        </Row>
        </>
    );
}
