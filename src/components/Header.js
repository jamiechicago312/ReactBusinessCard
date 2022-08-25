import React from "react"
import Headshot from "../images/headshot.jpg"

export default function Header() {

    return(
        <div className="Header">
            <img src={Headshot} />
            <h1>Jamie </h1>
            <h2>Web Developer | Front End | React</h2>
            <h3><a href="http://jamiechicago.com">jamiechicago.com</a></h3> 
        </div>
    )
}