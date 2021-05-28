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
import "./SignUp.scss";

const SignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    middleName: "",
    login: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState({
    showPassword: false,
    showRepeatPassword: false,
  });
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async () => {
    console.log(user);
    try {
      const res = await axios.post("http://192.168.0.64:4000/registration",
        user,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/home_page");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const inputList = [
    {
      value: "Имя",
      name: "name"
    },
    {
      value: "Фамилия",
      name: "lastName"
    },
    {
      value: "Отчество",
      name: "middleName"
    },
    {
      value: "Логин",
      name: "login"
    },
    {
      value: "E-mail",
      name: "email"
    },
    // {
    //   value: "Пригласительный код",
    //   name: "invitationCode"
    // },
  ];

  const updateUser = (e) => {
    setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}));
  };

  const handleClickShowPassword = () => {
    setShowPassword({...showPassword, showPassword: !showPassword.showPassword});
  };
  const handleClickShowRepeatPassword = () => {
    setShowPassword({...showPassword, showRepeatPassword: !showPassword.showRepeatPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign_up">
      <div className="input_fields">
        {inputList.map((item, index) => (
          <div key={`key${index}`} className="input_field">
            <p className="input_text">{item.value} </p>
            <TextField
              className="input"
              variant="outlined"
              name={item.name}
              onChange={(e) => updateUser(e)}
            />
          </div>
        ))}
        <div className="input_field">
          <p className="input_text">Пароль: </p>
          <OutlinedInput
            className="input"
            type={showPassword.showPassword ? "text" : "password"}
            name="password"
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
        <div className="input_field">
          <p className="input_text">Повторить пароль: </p>
          <OutlinedInput
            className="input"
            value={repeatPassword}
            type={showPassword.showRepeatPassword ? "text" : "password"}
            name="repeatPassword"
            onChange={(e) => setRepeatPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword.showRepeatPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
      <div className="buttons">
        <div className="sign_in_btn">
          <Link to="/login">
            <Button>Авторизация</Button>
          </Link>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
