import React from "react";
import NotificationCard from "./NotificationCard/NotificationCard";

const NotificationsCentre = ()=>{
    return(
        <div>
             <h1>Notifications</h1>
            <NotificationCard read={false} title="sample title"/>
        </div>
       
    )
}

export default NotificationsCentre;