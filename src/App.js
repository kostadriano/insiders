import Books from './pages/Books'
import NewBook from './pages/NewBook'
import UpdateBook from './pages/UpdateBook'

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
          <Route path="/books" exact component={Books} />
          <Route path="/new-book" component={NewBook} />
          <Route path="/books/:bookId" component={UpdateBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
