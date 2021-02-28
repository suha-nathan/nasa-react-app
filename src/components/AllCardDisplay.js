import React, {useEffect, useState} from 'react';
import {Card, CardColumns, Col, Image, Row} from "react-bootstrap";

import SmallCard from "./SmallCard";
import {useParams,useRouteMatch} from "react-router-dom"

function AllCardDisplay({data,setCard}) {

    const [cardArr,setCardArr] = useState([])

    useEffect(()=>{
        generateArray(30)
    },[data])

    function generateArray(num){
        let tempArr=data.slice(0,num)
        setCardArr(tempArr)
    }

    return (
        <CardColumns className={"all-columns"}>
            {cardArr.map( (el,idx) =>(
                el.links &&
                    <SmallCard key={idx} setCard={setCard} detail={el} url ={ `/pin/${el.data[0].nasa_id}`}/>
            ))}
        </CardColumns>
    );
}

export default AllCardDisplay;