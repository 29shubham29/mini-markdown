import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
