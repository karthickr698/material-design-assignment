import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
