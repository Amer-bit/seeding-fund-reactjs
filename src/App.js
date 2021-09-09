import Login from "./components/login/login";
import AdminLogin from "./components/admin-login/admin-login";
import Register from "./components/registeration/regiester";
import UserFundRequests from "./components/user-funds/view-fund";
import FundRequest from "./components/user-funds/create-fund-request";
import Users from "./components/admin-funds/users";
import PieChart from "./components/admin-funds/bar-chart";
import { Switch, Route } from "react-router-dom";

const routes = [
  { component: Login, path: '/', isExact: true },
  { component: AdminLogin, path: '/admin' },
  { component: Register, path: '/register' },
  { component: UserFundRequests, path: '/viewmyfunds' },
  { component: FundRequest, path: '/requestfund' },
  { component: Users, path: '/users' },
  { component: PieChart, path: '/chart' },

]

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route, ind) =>
          <Route key={ind}
            exact={route.isExact || false}
            path={route.path}
            component={route.component} />)
        }
      </Switch>
    </div>
  );
}

export default App;
