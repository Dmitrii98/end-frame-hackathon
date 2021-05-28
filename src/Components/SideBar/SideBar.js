import React from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  Divider,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleIcon from "@material-ui/icons/People";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="side_bar">
      {/*<Divider/>*/}
      <List className="list_bar">
        <Link to="/profile">
          <ListItem button>
            <ListItemIcon> <PersonIcon/> </ListItemIcon>
            <ListItemText className="side_bar_text" primary="Мой профиль"/>
          </ListItem>
        </Link>
        <Link to="/news">
          <ListItem button>
            <ListItemIcon> <WebAssetIcon/> </ListItemIcon>
            <ListItemText className="side_bar_text" primary="Новости"/>
          </ListItem>
        </Link>
        <Link to="/messages">
          <ListItem button>
            <ListItemIcon> <ChatIcon/> </ListItemIcon>
            <ListItemText className="side_bar_text" primary="Сообщения"/>
          </ListItem>
        </Link>
        <Link to="/friends">
          <ListItem button>
            <ListItemIcon> <PeopleIcon/> </ListItemIcon>
            <ListItemText className="side_bar_text" primary="Друзья"/>
          </ListItem>
        </Link>
        <Link to="/meetings">
          <ListItem button>
            <ListItemIcon> <EmojiPeopleIcon/> </ListItemIcon>
            <ListItemText className="side_bar_text" primary="Знакомства"/>
          </ListItem>
        </Link>
      </List>
      {/*<Divider/>*/}
    </div>
  );
};

export default SideBar;
