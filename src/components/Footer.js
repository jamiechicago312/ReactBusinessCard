import React from "react"
import GitHub from "../images/GitHub-Icon.png"
import Twitter from "../images/Twitter-Icon.png"

export default function Footer() {
    return(
        <div className="Footer">
            <ul>
                <li><a href="https://github.com/jamiechicago312"><img src={GitHub} /></a></li>
                <li><a href="https://twitter.com/"><img src={Twitter} /></a></li>
            </ul>
        </div>
    )
}
