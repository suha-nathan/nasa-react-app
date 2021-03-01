import React, {useEffect, useState} from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {Card, Image} from "react-bootstrap";

function SmallCard({detail,setCard,url}) {


    return (
            <LinkContainer to={url}>
                <Card className={"display-card border-0"} onClick={()=>{setCard(detail)}} >
                    <Image variant="top" src={detail.links[0].href} fluid/>
                    {/*<Card.Body>*/}
                    {/*    <Card.Title>{el.data[0].title}</Card.Title>*/}
                    {/*    <Card.Text>*/}
                    {/*        {el.data[0].description.slice(0,100)}*/}
                    {/*    </Card.Text>*/}
                    {/*</Card.Body>*/}
                </Card>
            </LinkContainer>

    );
}

export default SmallCard;