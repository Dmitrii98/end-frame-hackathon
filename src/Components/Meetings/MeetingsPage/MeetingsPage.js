import "./MeetingsPageStyles.scss";
import AddPost from "../../AddPost/AddPost";
import FilterPosts from "../../FilterPosts/FilterPosts";
import Posts from "../../Posts/Posts";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="meetings_page">
      <div className="meetings_main_header">
        <AddPost/>
        <FilterPosts/>
      </div>
      <div className="space"></div>
      <div className="meetings_main_content">
        <Posts/>
      </div>
    </div>
  );
};

export default ProfilePage;
