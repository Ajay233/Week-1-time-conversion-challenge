import './App.css';
import TimeConverter from './timeConversionRenderer'

const App = () => {
  return (
    <div className="App">
      <div>Enter the number of seconds you want to convert</div>
      <TimeConverter />
    </div>
  );
}

export default App;
