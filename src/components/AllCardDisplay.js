import React, {useEffect, useState} from 'react';
import {CardColumns} from "react-bootstrap";
import SmallCard from "./SmallCard";


function AllCardDisplay({data,cardDetails,setCardDetails}) {

    const [cardArr,setCardArr] = useState([])

    function generateArray(num){
        let tempArr=data.slice(0,num)
        setCardArr(tempArr)
    }

    useEffect(()=>{
        generateArray(30)
    },[data])

    return (
        <CardColumns className={"all-columns"}>
            {cardArr.map( (el,idx) =>(
                el.links &&
                    <SmallCard key={idx} detail={el} setCard={setCardDetails} url ={ `/pin/${el.data[0].nasa_id}`}/>
            ))}
        </CardColumns>
    );
}

export default AllCardDisplay;