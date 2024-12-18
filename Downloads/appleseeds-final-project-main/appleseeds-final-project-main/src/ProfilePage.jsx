import './index.css';
import { useState } from "react";
// import {Data} from './Data.jsx'

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Ohed",
    age: 35,
    email: "ohad35@gmail.com",
    password:"12345",
    academicProfession: "Architecture Student",
    culture: "Jewish",
    phoneNumber: "123-456-7890",
    academicInstitution: "University of Architecture",
    typeOfService: "Private classes",
    aboutMe: "Passionate about design and innovation.",
    experience: "Internship in architecture firm",
    rating: "4.7/5",
    basicStatistics: "10+ projects completed",
    profileImg: "https://via.placeholder.com/150",
    feedback: "daniel: amazing, shara: good",
    isEditing: false
  });

  function toggleEdit  () {
    setUser((prevUser) => ({
      ...prevUser,
      isEditing: !prevUser.isEditing
    }));
  };

  function handleChange (e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  function handleImgChange (e) {
    const file =  e.target.files [0];
    if (file) {
        const imgURL = URL.createObjectURL (file);
        setUser ((prevUser) => ({
            ...prevUser,
            profileImg: imgURL
        }));
    }
  };

  return (
    <div className='container'>
      <h1>User Profile</h1>

    <div className='square top'> 
      <div className='profile-img-container'>
        <img src={user.profileImg} alt="Profile" style={{ width: "150px", height: "150px"}} />
        
      <div> 
        {user.isEditing && (
        <input className='input-file' type="file" accept="image/*" onChange={handleImgChange}
        />
        )}
      </div>
      
        <p>Name: {user.name}</p>
        <p>Rating: {user.rating}</p>
        <p>About Me: {user.aboutMe}</p>
      </div>

      <div className='square'> 
        <p>Phone Number: <a href={`https://wa.me/${user.phoneNumber.replace(/-/g, '')}`} target="_blank" rel="noopener noreferrer">
          {user.phoneNumber}
          </a></p>
        

        <p>email:</p>
        {user.isEditing ? (
        <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        />
        ) : (
        <span>{user.email}</span>
        )}

    {user.isEditing && (
          <>
          <p>password:</p>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            />
            </>
        )}
      </div>
    </div>

    <div className='square middle'>
        <h3>academicProfession: {user.academicProfession}</h3>
        <p>Culture: {user.culture}</p>
        <p>Academic Institution: {user.academicInstitution}</p>
        <p>Type of Service: {user.typeOfService}</p>
        <p>Experience: {user.experience}</p>
        <p>Basic Statistics: {user.basicStatistics}</p>
    </div>


    <div className="square bottom">
  <h3>Feedback:</h3>
  <div className="feedback-item">
    <div className="feedback-header">
      <img src="https://via.placeholder.com/50" alt="Daniel" className="feedback-avatar" />
      <h5>
      <a href="/profile/daniel" className="feedback-name">Daniel</a>
      </h5>
    </div>
    <p className="feedback-comment">Amazing professional!</p>
  </div>

  <div className="feedback-item">
    <div className="feedback-header">
      <img src="https://via.placeholder.com/50" alt="Sarah" className="feedback-avatar" />
      <h5>
      <a href="/profile/daniel" className="feedback-name">Sarah</a>
      </h5>
    </div>
    <p className="feedback-comment">Good!</p>
  </div>
</div>

      
        <button onClick={toggleEdit}>
          {user.isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
  );
}



