import "./Profile.css"
import Nav from './components/Nav'
import { selectUser } from './slices/userSlice'
import { useSelector } from 'react-redux'
import { auth } from './firebase'
import { useNavigate } from "react-router";
import { Navigate } from 'react-router'

function Profile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut()
        navigate("*")
    }
    
    
     if (!user) {
        return <Navigate to="*" replace />;
      }  
  return (
    <div className="profile">
        <Nav />
        <div className="profile-body">
            <h1>Edit Profile</h1>
            <div className="profile-info">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix Avatar"
            />
           <div className="profile-details">
               <h2>{user.email}</h2>
               <div className="profile-out">
                   <button onClick={signOut} className="profile-btn">Sign Out</button>
               </div>
           </div>
            </div>
        </div>
    </div>
  )
}

export default Profile