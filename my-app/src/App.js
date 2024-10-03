import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponents';
import FunctionalComponentWithProps from './components/FunctionalComponentsWithProps';
import StatfulComponent from './components/StatfulComponent';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import NestingComponents from './components/NestingComponents';


function App() {
  return (
    <div className="App">
      <NestingComponents />
    </div>
  );
}

export default App;
