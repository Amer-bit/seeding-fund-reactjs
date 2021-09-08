import Login from "./components/login/login";
import Register from "./components/registeration/regiester";
import { Switch, Route } from "react-router-dom";

const routes = [
  { component: Login, path: '/login' },
  { component: Register, path: '/register' }
]

function App() {
  return (
    <div className="App">
      <Switch>{routes.map((route, ind) => <Route key={ind} path = {route.path} component = {route.component}/>)}</Switch>
    </div>
  );
}

export default App;
