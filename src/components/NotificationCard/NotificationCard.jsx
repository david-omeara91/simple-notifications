import React from "react";
import "./NotificationCard.styles.css"

const NotificationCard = ({title,read})=>{
    return (
        <div className="card" style={{backgroundColor: read? "#D3D3D3": "white"}}>
            <p>this is the title</p>
            {!read ? 
            <button className="button">Mark read</button> : null}
        </div>
    )
}

export default NotificationCard