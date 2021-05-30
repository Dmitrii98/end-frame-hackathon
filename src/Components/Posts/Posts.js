import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post/Post";
import "./PostsStyles.scss";

const MainPage = ({ filteredPosts }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    try {
      const res = await axios.get("http://10.131.56.106:4000/getPosts",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${user?.accessToken}`
          },
        }
      );
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts">
      {posts?.map((post) => (
        <Post key={`key-${posts?.id}`} post={post}/>
      ))}
    </div>
  );
};

export default MainPage;
