import React, {useEffect, useState} from 'react';
import {Card, CardColumns, Col, Image, Row} from "react-bootstrap";

import SmallCard from "./SmallCard";
import {useParams,useRouteMatch} from "react-router-dom"

function AllCardDisplay({data,setCard}) {

    const [cardArr,setCardArr] = useState([])

    useEffect(()=>{
        generateArray(30)
        // console.log(cardArr)
    },[data])

    function generateArray(num){
        // let returnArr =  [...Array(num).keys()]
        // console.log(returnArr)
        // console.log(data)
        let tempArr=data.slice(0,num)
        // console.log(tempArr)
        setCardArr(tempArr)
    }

    return (
        // <Row >
        <CardColumns>
            {cardArr.map( (el,idx) =>(
                el.links &&
                    <SmallCard key={idx} setCard={setCard} detail={el} url ={ `/pin/${el.data[0].nasa_id}`}/>
            ))}
        </CardColumns>

        // </Row>
    );
}

export default AllCardDisplay;