import React from "react"
import "./navBar.css";

export default function NavBar(params){
    return(
        <div className="navbar">
            <div className="headNav">
                <a href="" id={params.home}>HOME</a>
                <a href="" id={params.paintings}>PAINTINGS</a>
            </div>
            <div className="centerNav">
                <h2>MONA  ART  STUDIO</h2>
            </div>
            <div className="tailNav">
                <a href="" id={params.blog}>BLOG</a>
                <a href="" id={params.request}>REQUEST</a>
            </div>
        </div>
    )
}