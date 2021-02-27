import React from 'react';
import {Image,Jumbotron,Button} from "react-bootstrap"
import {Link, useParams, useRouteMatch} from "react-router-dom"

function CardItem({card}) {
    // console.log(typeof card.href)
    const {path,url}= useRouteMatch()
    // const {path} = useRouteMatch()
    // console.log(useParams())
    // console.log(useRouteMatch() )
    // console.log(url)
    return (
        <Jumbotron className={"jumbo"}>
            <div className={"jumbo-child d-flex px-4"}>
                <Image className={"jumbo-image mr-4"} src={card.links[0].href} fluid rounded/>
                <div className={" jumbo-description text-justify text-dark font-weight-light "}>
                    <h1>{card.data[0].title}</h1>
                    <p >
                        {card.data[0].description}
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