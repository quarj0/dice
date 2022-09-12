
import './App.css';

function App() {
  const date = new Date();
  const hours = date.getHours()
  let timeOfDay

  if (hours > 12){
    timeOfDay = "Good morning"
  }else if (hours >= 12 && hours < 17){
timeOfDay = "Good afternoon"
  }else{
    timeOfDay = "Good evening"
  }

  return (
    <div className="App">
      <h1>{timeOfDay}</h1>
    </div>
  );
}

export default App;
