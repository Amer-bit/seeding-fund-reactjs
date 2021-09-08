import Login from "./components/login/login";
import AdminLogin from "./components/admin-login/admin-login";
import Register from "./components/registeration/regiester";
import UserFundRequests from "./components/user-funds/view-fund";
import FundRequest from "./components/user-funds/create-fund-request";
import { Switch, Route } from "react-router-dom";

const routes = [
  { component: Login, path: '/login' },
  { component: AdminLogin, path: '/admin/login' },
  { component: Register, path: '/register' },
  { component: UserFundRequests, path: '/viewmyfunds' },
  { component: FundRequest, path: '/requestfund' }
]

function App() {
  return (
    <div className="App">
      <Switch>{routes.map((route, ind) => <Route key={ind} path={route.path} component={route.component} />)}</Switch>
    </div>
  );
}

export default App;
