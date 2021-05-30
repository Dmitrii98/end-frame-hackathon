import anonUser from "../../../Image/anon_user.png";
import "./ProfilePageStyles.scss";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="profile_page">
      <div className="user_information">
        <div className="avatar_profile_page">
          <img
            src={anonUser }
            alt="anonUser"
            className="img_avatar_profile_page"
          />
        </div>
        <div className="full_name_profile_page">
          <p className="text_full_name_user_information">
            {user?.name} {user?.lastName}
          </p>
          <span className="status_profile_page">Статус</span>
          <div className="user_information_profile_page">
            <p className="university_user_information"><span className="title_user_information">Университет:</span> ИТА
              ЮФУ</p>
            <p className="dorm_user_information"><span className="title_user_information">Общежитие№:</span> {user.dorm}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
