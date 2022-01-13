import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './component/home/page';
import UserPage from './component/userdetail/page';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/employee/:employeeID" component={UserPage} />

        <Route>404 not found</Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
