import "./Profile.css";

const Profile = ({name, age, From})=> {
  return <div className="profile">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>From: {From}</p>
  </div>;
};

export default Profile;
