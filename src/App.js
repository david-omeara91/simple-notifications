import './App.css';
import NotificationsCentre from './components/NotificationsCentre';
import NotificationsCounter from './components/NotificationsCounter';


function App() {

  // fetch("https://6307e4d046372013f5738d8b.mockapi.io/Notification").then((res)=>res.json()).then(notifications=>console.log(notifications))

  return (
    <div className="App">
      <NotificationsCounter/>
      <NotificationsCentre/>

     
    </div>
  );
}

export default App;
