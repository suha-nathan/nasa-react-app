import React, {useEffect, useState} from 'react';
import {Image,Jumbotron,Button} from "react-bootstrap"
// import AllCardDisplay from "./AllCardDisplay";
// import {useRouteMatch} from "react-router-dom"

function CardItem({cardDetails,query, setQuery}) {
    // const [card,setCard] = useState(cardDetails)
    //
    // const [didMount,setDidMount]= useState(false)

    // useEffect( ()=>{
    //     setDidMount(true)
    //     return ()=>{
    //         setDidMount(false)
    //     }
    // },[])
    //
    // if (!didMount){
    //     return null
    // }


    useEffect(()=>{
        let key
        if (cardDetails.data[0].keywords.length>1){
            const uniqueWords = cardDetails.data[0].keywords.filter(keyword=> keyword!==query)
            key = uniqueWords[0]
            console.log(uniqueWords)
        }else{
            key = cardDetails.data[0].keywords[0]
        }

        console.log(cardDetails.data[0].keywords)

        console.log(key)
        setQuery(key)
        //call database of info from all keywords!
    },[cardDetails])

    return (

        <Jumbotron className={"jumbo"}>

               <div className={"jumbo-child d-flex px-4"}>
                     <Image className={"jumbo-image mr-4"} src={cardDetails.links[0].href} fluid rounded/>
                     <div className={" jumbo-description text-justify text-dark font-weight-light "}>
                         <h1>{cardDetails.data[0].title}</h1>
                         <p >
                             {cardDetails.data[0].description}
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