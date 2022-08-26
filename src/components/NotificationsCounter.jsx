import React, {useEffect} from "react";
import { useNotifications }  from "../hooks/useNotifications";

const NotificationsCounter = ()=>{
    const [notifications, setNotifications] = useNotifications();


    const unreadNotifications = notifications.filter(n=>n.read===false)



    useEffect(()=>{
        window.addEventListener("markRead", ()=>console.log("heard read event"))
    },[])

    return(
        <p>Unread Notifications: {unreadNotifications.length}</p>
    )
}

export default NotificationsCounter;