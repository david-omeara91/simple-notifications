import React from "react";
import { useUser } from "../../context/userContext";
import "./NotificationCard.styles.css"

const NotificationCard = ({title,read, markRead, id})=>{

    const handleClick = ()=> markRead(id);

    const user = useUser();


    return (
        <div className="card" data-testid="card" style={{backgroundColor: read? "#D3D3D3": "white"}}>
            <p>this is the title -- {user.name} </p>
            {!read ? 
            <button className="button" data-testid="readButton" onClick={handleClick}>Mark read</button>
             : null}
        </div>
    )
}

export default NotificationCard