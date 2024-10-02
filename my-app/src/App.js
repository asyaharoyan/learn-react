import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponents';
import FunctionalComponentWithProps from './components/FunctionalComponentsWithProps';
import StatfulComponent from './components/StatfulComponent';

function App() {
  return (
    <div className="App">
      <StatfulComponent greeting="I am a statful component!"/>
    </div>
  );
}

export default App;
