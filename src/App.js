import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Task';
// import backgroundImage from './background.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route exact path="/"></Route>  
      </Switch>
    </div>
  );
}

export default App;
