import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./PostStyles.scss";

const Post = ({ post = {} }) => {

  const {
    author,
    message,
    dorm,
    date
  } = post;

  console.log(post);


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
    </div>
  );
};

export default Post;
