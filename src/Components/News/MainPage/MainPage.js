import { useState } from "react";
import AddPost from "../../AddPost/AddPost";
import FilterPosts from "../../FilterPosts/FilterPosts";
import Posts from "../../Posts/Posts";
import "./MainPageStyle.scss";

const MainPage = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  return (
    <div className="news_main_page">
      <div className="news_main_header">
        <AddPost/>
        <FilterPosts setFilteredPosts={setFilteredPosts}/>
      </div>
      <div className="space"></div>
      <div className="news_main_content">
        <Posts filteredPosts={filteredPosts}/>
      </div>
    </div>
  );
};

export default MainPage;
