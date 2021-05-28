import AddPost from "../../AddPost/AddPost";
import FilterPosts from "../../FilterPosts/FilterPosts";
import "./MainPageStyle.scss";

const MainPage = () => {
  return (
    <div className="news_main_page">
      <div className="header_news">
        <AddPost/>
        <FilterPosts/>
      </div>
    </div>
  );
};

export default MainPage;
