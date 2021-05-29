import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import "./SignIn.scss";

const SignIn = () => {
  const history = useHistory();
  const [user, setUser] = React.useState({
    login: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState({
    showPassword: false,
  });

  const updateUser = (e) => {
    setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}));
  };

  const handleClickShowPassword = () => {
    setShowPassword({...showPassword, showPassword: !showPassword.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://10.131.56.224:4000/login",
        user,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/profile");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="sign_in">
      <div className="input_fields">
        <div className="input_field">
          <p className="input_text">Логин: </p>
          <TextField
            className="input"
            variant="outlined"
            name="login"
            onChange={(e) => updateUser(e)}
          />
        </div>
        <div className="input_field">
          <p className="input_text">Пароль: </p>
          <OutlinedInput
            className="input"
            type={showPassword.showPassword ? "text" : "password"}
            name="password"
            value={user.password}
            onChange={(e) => updateUser(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword.showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
      <div className="buttons">
        <div className="sign_up_btn">
          <Link to="/registration">
            <Button>Регистрация</Button>
          </Link>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Авторизоваться
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
