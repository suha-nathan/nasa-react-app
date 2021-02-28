import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {Card, CardColumns, Col, Image, Overlay, Row} from "react-bootstrap";

function SmallCard({setCard,detail,url}) {
    return (
        <Col>
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
            <Overlay/>
        </Col>

    );
}
//small-card-item // className={"display-card-image"}
export default SmallCard;