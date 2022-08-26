const NotificationActions = {
    getNotifications: async()=>{
        const url="https://6307e4d046372013f5738d8b.mockapi.io/Notification";
        const response = await fetch(url);
        const notifications = await response.json();
        return notifications;
        
    }
}
export default NotificationActions;