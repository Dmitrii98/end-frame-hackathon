import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Menu,
  MenuItem,
  Fade
} from "@material-ui/core";
import "./HeaderStyles.scss";
import Logo from "../Icons/Logo";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="header_inner">
        <Logo
          width={100}
          className="logo_icon_home_page"
        />
        <div className="profile_menu">
          <p
            className="user_name"
          >
            Имя пользователя
          </p>
          <Avatar
            src="/broken-image.jpg"
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="avatar"
          />
          <Menu
            id="fade-menu"
            className="fade_menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <Link to="/profile">
              <MenuItem onClick={handleClose}>Мой профиль</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Выйти</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
