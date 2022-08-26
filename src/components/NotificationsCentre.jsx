import React, {useState, useRef} from "react";
import NotificationCard from "./NotificationCard/NotificationCard";
import { useNotifications } from "../hooks/useNotifications";

const NotificationsCentre = ()=>{

   const [notifications, setNotifications, isLoading] = useNotifications();
   const [visibleNotifications, setVisibleNotifications] = useState(3);
   const [readFilter, setReadFilter] = useState("all");

   const refExample = useRef("example");

   console.log(refExample)

   refExample.current = "changed"


   

    const handleMarkRead = (notificationId)=>{
        const newState = [...notifications]
        const index = newState.findIndex(n=>n.id === notificationId);
        const notification = newState[index];
        notification.Read = true;
        setNotifications(newState); //update state

        const markReadEvent = new CustomEvent("markRead");
        dispatchEvent(markReadEvent);


    }

    const handleClick=()=>{
        setVisibleNotifications(visibleNotifications+3);
    }

    const handleFilterClick=()=>{
        setReadFilter("unread");
    } 

    const shownNotifications = notifications.slice(0,visibleNotifications).filter(n=>n.Dismissed===false);
    let filteredNotifications;
    switch(readFilter) {
        case "all":
            filteredNotifications = shownNotifications;
            break;
        case "unread":
            console.log("unread selected")
            filteredNotifications = shownNotifications.filter(n=>n.Read===false)
            break;
        default:
            filteredNotifications = shownNotifications;
    }

    const showLoadMoreButton = filteredNotifications.length === notifications.length;

    console.log(readFilter)
    console.log(filteredNotifications)

    return(
        <div>
             <h1>Notifications</h1>

             {isLoading ? <h1>Loading</h1> :  

             <h1>total notifications: {notifications.length}</h1>}

             <button onClick={handleFilterClick}>Show unread only</button>

             {filteredNotifications.map(n=><NotificationCard key={n.id} read={n.Read} title={n.Title} id={n.id} markRead={handleMarkRead}/>)}  


            { showLoadMoreButton ? null : <button onClick={handleClick}>Load more</button> }

           
            
               
       
        </div>
       
    )
}

export default NotificationsCentre;