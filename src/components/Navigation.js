import React, {useState} from 'react';
import {Button, Container, FormControl, Image, Nav, Navbar, NavLink} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

function Navigation({query,searchQuery}) {
    const [tempQuery,setTempQuery] = useState("")

    function handleClick(){

        searchQuery(tempQuery)
        setTempQuery("")
    }

    function handleChange(e){
        let temp
        temp = e.target.value
        setTempQuery(temp)
    }

    return (
        <Navbar variant="light" sticky={'top'} className={"nav-parent"}>
            <LinkContainer className={"text-white"} to="/home">
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

            <LinkContainer className={"mr-sm-5"} to='/home'>
                <Button variant={"light"} className="mr-sm-3 border-white text-white" onClick={()=>{handleClick()}} >Search</Button>
            </LinkContainer>

            <Image src="https://via.placeholder.com/50" roundedCircle />

        </Navbar>

    );
}

export default Navigation;