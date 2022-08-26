import React, {useEffect, useState} from 'react';
import NotificationActions from '../actions/NotificationActions';

export const useNotifications = ()=>{
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const refreshNotifications = async()=>{
        setIsLoading(true);
        NotificationActions
            .getNotifications()
            .then(notifications=>setNotifications(notifications))
            .catch(error=>console.log(error))
            .finally(()=> setIsLoading(false));
    }

    useEffect(()=>{
       refreshNotifications();
    },[])

    return [notifications, setNotifications, isLoading];

}

