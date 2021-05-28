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

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route path="/profile"
          // render={() => checkUserRoute() ? <Redirect to='/login'/> : <MyProfile/>}
        >
          <MyProfile/>
        </Route>
        <Route
          path="/news"
          // render={() => checkUserRoute() ? <Redirect to='/login'/> :  <News/>}
        >
          <News/>
        </Route>
        <Route
          path="/messages"
          // render={() => checkUserRoute() ? <Redirect to='/login'/> :   <Messages/>}
        >
          <Messages/>
        </Route>
        <Route
          path="/friends"
          // render={() => checkUserRoute() ? <Redirect to='/login'/> :   <Messages/>}
        >
          <Friends/>
        </Route>
        <Route
          path="/meetings"
          // render={() => checkUserRoute() ? <Redirect to='/login'/> :    <Meetings/>}
        >
          <Meetings/>
        </Route>
        {!localStorage.getItem("user") && <Redirect from="" to="/login"/>}
      </Switch>
    </div>
  );
};

export default App;
