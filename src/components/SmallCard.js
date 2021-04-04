import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {Card, Image} from "react-bootstrap";

const SmallCard = React.forwardRef((props,newRef) => {

    function cardSetDetails(){
        // console.log("setting card details")
        // console.log(props.detail)
        // console.log(props.setCard)
        props.setCard(props.detail)
    }

    return (
        <div ref={newRef}>
        <LinkContainer to={props.url} >
            <Card className={"display-card border-0"} onClick={() => {cardSetDetails()}}>
                <Image variant="top" src={props.detail.href} fluid/>
            </Card>
        </LinkContainer>
        </div>
    );
})

export default SmallCard;