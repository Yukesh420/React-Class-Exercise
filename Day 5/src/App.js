import './App.css';
import  Day5 from './Day5';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day5 a={["chocalate","icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;