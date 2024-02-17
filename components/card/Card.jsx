import React from "react"

export default function Card({ 
    icon, 
    title = "Card Component", 
    content = `Lorem Ipsum Dolor content content goober goober
            card content goes here`, 
    ...otherProps}) {

    return (
        <div className="card-container">
            {/*icon*/}
            {/*title*/}
            <h3>{title}</h3>
            {/*content*/}
            <p>Lorem Ipsum Dolor content content goober goober
            card content goes here</p>
        </div>
    )
}