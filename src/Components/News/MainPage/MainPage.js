import AddPost from "../../AddPost/AddPost";
import FilterPosts from "../../FilterPosts/FilterPosts";
import Posts from "../../Posts/Posts";
import "./MainPageStyle.scss";

const MainPage = () => {
  return (
    <div className="news_main_page">
      <div className="news_main_header">
        <AddPost/>
        <FilterPosts/>
      </div>
      <div className="space"></div>
      <div className="news_main_content">
        <Posts/>
      </div>
    </div>
  );
};

export default MainPage;
