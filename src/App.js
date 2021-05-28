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
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route path="/profile">
          <MyProfile/>
        </Route>
        <Route path="/news">
          <News/>
        </Route>
        <Route path="/messages">
          <Messages/>
        </Route>
        <Route path="/friends">
          <Friends/>
        </Route>
        <Route path="/meetings">
          <Meetings/>
        </Route>
        {!localStorage.getItem("user") && <Redirect from="" to="/login"/>}
      </Switch>
    </div>
  );
};

export default App;
