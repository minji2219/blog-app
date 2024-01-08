import { app } from "firebaseApp";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      toast.success("로그아웃 되었습니다.");
    } catch (e: any) {
      toast.error(e?.code);
    }
  };

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{user?.email}</div>
          <div className="profile__name">{user?.displayName || "사용자"}</div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSignOut}>
        logout
      </div>
    </div>
  );
};

export default Profile;
