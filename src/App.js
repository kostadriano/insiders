import Books from './pages/Books'
import NewBook from './pages/NewBook'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/new-book" component={NewBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
