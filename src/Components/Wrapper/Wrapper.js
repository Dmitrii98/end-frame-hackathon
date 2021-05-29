import { Route, Switch } from "react-router-dom";
import SignIn from "../Login/SignIn/SignIn";
import SignUp from "../Rerestration/SignUp/SignUp";
import Logo from "../Icons/Logo";
import "./WrapperStyles.scss";

const Login = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Logo
          height={60}
          width={60}
          className="logo_icon"
        />
        <p>Добро пожаловать в общежитие!</p>
      </header>
      <div className="inner_wrapper">
        <Switch>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/registration">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Login;
