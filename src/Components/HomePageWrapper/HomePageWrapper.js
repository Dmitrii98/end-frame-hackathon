import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Container,
  CssBaseline,
} from "@material-ui/core";
import SideBar from "../SideBar/SideBar";
import MainPage from "../News/MainPage/MainPage";
import ProfilePage from "../MyProfile/ProfilePage/ProfilePage";
import "./HomePageWrapperStyles.scss";

const HomePageWrapper = () => {
  return (
    <div className="home_page_wrapper">
      <CssBaseline/>
      <Container fixed>
        <div className="content_wrapper">
          <div className="content_side_bar">
            <SideBar/>
          </div>
          <div className="content">
            <Switch>
              <Route path="/profile">
                <ProfilePage/>
              </Route>
              <Route path="/news">
                <MainPage/>
              </Route>
              <Route path="/messages">
                {/*<Meetings/>*/}
                <p>Messages</p>
              </Route>
              <Route path="/friends">
                {/*<Meetings/>*/}
                <p>Friends</p>
              </Route>
              <Route path="/meetings">
                {/*<Meetings/>*/}
                <p>Meetings</p>
              </Route>
            </Switch>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePageWrapper;
