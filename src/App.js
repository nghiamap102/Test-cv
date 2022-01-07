import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './module/Home/page';
import UserPage from './module/DetailUser/page';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:userID" component={UserPage} />

        <Route>404 not found</Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
