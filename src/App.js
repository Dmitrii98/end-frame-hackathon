import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Rerestration/Registration";
import MyProfile from "./Components/MyProfile/MyProfile";
import News from "./Components/News/News";
import Messages from "./Components/Messages/Messages";
import Friends from "./Components/Friends/Friends";
import Meetings from "./Components/Meetings/Meetings";

const App = () => {
  const checkUserRoute = () => {
    return !localStorage.getItem("user");
  };

  document.body.style.backgroundColor = "#e3ebf8";

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route
          path="/profile"
          render={() => checkUserRoute() ? <Redirect to="/profile"/> : <MyProfile/>}
        />
        <Route
          path="/news"
          render={() => checkUserRoute() ? <Redirect to="/news"/> : <News/>}
        />
        <Route
          path="/messages"
          render={() => checkUserRoute() ? <Redirect to="/messages"/> : <Messages/>}
        />
        <Route
          path="/friends"
          render={() => checkUserRoute() ? <Redirect to="/friends"/> : <Friends/>}
        />
        <Route
          path="/meetings"
          render={() => checkUserRoute() ? <Redirect to="/meetings"/> : <Meetings/>}
        />
        {!localStorage.getItem("user") && <Redirect to="/login"/>}
      </Switch>
    </div>
  );
};

export default App;
