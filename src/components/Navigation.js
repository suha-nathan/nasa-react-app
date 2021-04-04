import React, {useState} from 'react';
import {Button, FormControl, Image,Navbar, NavLink, Alert} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import { checkQuery } from "../lib/library"

function Navigation({setQueriesDb,setQuery}) {
    const [tempQuery,setTempQuery] = useState("")
    const [alert,setAlert] = useState(false)
    function handleClick(){
        if(!tempQuery){
            return setAlert(true)
        }
        checkQuery(tempQuery, setQueriesDb)
        setQuery(tempQuery)        
        setTempQuery("")
        //set queriesDB
    }

    function handleChange(e){
        let temp
        temp = e.target.value
        setTempQuery(temp.toLowerCase())
    }

    return (
        <>
        {alert && 
           <Alert variant="danger">Not valid query</Alert> 
        }
        <Navbar sticky={'top'} className={"nav-parent"}>
            <LinkContainer className={"text-white"} to="/">
                <Navbar.Brand >
                    <Image
                        alt=""
                        src="https://via.placeholder.com/30"
                        className="d-inline-block align-top mr-sm-5"
                        rounded
                    />{' '}
                    To-Infinity
                </Navbar.Brand>
            </LinkContainer>

            <LinkContainer className={"text-white"} to='/home'>
                <NavLink>Home</NavLink>
            </LinkContainer>

            <LinkContainer className={"text-white mr-sm-5"} to='/save'>
                <NavLink>Save</NavLink>
            </LinkContainer>

            <FormControl variant={"outline-light"} value={tempQuery} type="text" placeholder="Search" className="mr-sm-5"
                         onChange={(e)=>{handleChange(e)}} />

            <LinkContainer className={"mr-sm-5"} to={"/home"}>
                {/*<Button variant={"light"} className="mr-sm-3 border-white text-white" onClick={()=>{handleClick()}} >Search</Button>*/}
                <Button variant={"outline-light"} className="mr-sm-3"  onClick={()=>{handleClick()}}>Search</Button>
            </LinkContainer>

            <Image src="https://via.placeholder.com/50" roundedCircle />

        </Navbar>
        </>
    );
}

export default Navigation;