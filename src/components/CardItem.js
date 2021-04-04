import React, {useEffect, useState} from 'react';
import {Image,Jumbotron,Button} from "react-bootstrap"
// import AllCardDisplay from "./AllCardDisplay";
// import {useRouteMatch} from "react-router-dom"

function CardItem({cardDetails,query, setQuery}) {

    useEffect(()=>{
        let key
        // if (cardDetails?.keywords?.length>1){
        //     const uniqueWords = cardDetails.keywords.filter(keyword=> keyword!==query)
        //     key = uniqueWords[0].toLowerCase()
        //     // console.log(uniqueWords)
        // }else{
        //     key = cardDetails?.keywords[0]?.toLowerCase()
        // }

        // console.log(cardDetails?.keywords)
        // console.log(key)
        // setQuery(key)
    },[cardDetails])

    return (

        <Jumbotron className={"jumbo"}>

               <div className={"jumbo-child d-flex px-4"}>
                     <Image className={"jumbo-image mr-4"} src={cardDetails?.href} fluid rounded/>
                     <div className={" jumbo-description text-justify text-dark font-weight-light "}>
                         <h1>{cardDetails?.title}</h1>
                         <p >
                             {cardDetails?.description}
                         </p>
                         <p>
                             <Button variant="outline-dark">Learn more</Button>
                         </p>
                     </div>
                 </div>
        </Jumbotron>

    );
}

export default CardItem;