import React from "react"
import Badge from "./components/badge/Badge"

export default function Badges() {
    return(
        <>
            <h1>Badges</h1>
            <div className='badge-container'>
                <Badge shape="circle" size="small" content="{test}"/>
                <Badge shape="square" size="small" content="test" />
            </div>
            <div className="badge-container">
                <Badge shape="circle" size="small" content="{test}"/>
                <Badge shape="square" size="small" content="test" />
            </div>
      </>
    )
}