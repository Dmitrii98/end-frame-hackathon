import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import "./PostStyles.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = ({ post = {} }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    author,
    message,
    dorm,
    date,
    id
  } = post;
  const [likes, setLikes] = useState();
  const [testLiked, setTestLiked] = useState(likes?.isLiked);

  const getPostLikes = async () => {
    try {
      const res = await axios.post("http://10.131.56.224:4000/getPostLikes",
        {
          postId: id
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${user?.accessToken}`,
          },
        }
      );
      setLikes(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const tapLikeButton = async () => {
    try {
      const res = await axios.post("http://10.131.56.224:4000/tapLikeButton",
        {
          postId: id
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${user?.accessToken}`,
          },
        }
      );
      setTestLiked(!testLiked);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPostLikes();
  }, [testLiked]);

  console.log(testLiked);

  return (
    <div className="post">
      <div className="header_post">
        <div className="avatar_header_post ">
          <AccountCircleIcon color="action" className="accountCircleIcon"/>
        </div>
        <div className="author_header_post">
          <p className="name_author_header_post">{author}</p>
          <p className="data_author_header_post">{date}</p>
        </div>
        <div className="dorm_header_post">
          <p className="name_dorm_header_post">Общежитие №{dorm}</p>
        </div>
      </div>
      <div className="message_post">
        <p className="text_message_post">{message}</p>
      </div>
      <div className="buttons_post">
        {
          testLiked
            ? <FavoriteIcon
              color={"secondary"}
              className="favorite_icon"
              onClick={tapLikeButton}
            />
            : <FavoriteBorderIcon
              color={"action"}
              className="unfavorite_icon"
              onClick={tapLikeButton}
            />
        }
        <p className="likes_count">{likes?.count}</p>
        <ModeCommentOutlinedIcon
          color={"action"}
          className="comment_icon"
        />
      </div>
    </div>
  );
};

export default Post;
