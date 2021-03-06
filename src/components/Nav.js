import React,{useState, useEffect} from 'react'
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';



function Nav() {
   const user = useSelector(selectUser)
    const navigate = useNavigate();
    const[show, handleShow] = useState(false);
    const navigation = () => user ? navigate("/Profile") : navigate("*")

useEffect(() => {
    window.addEventListener("scroll",()=>{
        if (window.scrollY > 100){
           handleShow(true);
        }else handleShow(false);
    })
    return () => {
        window.removeEventListener("scroll");
    }
}, [])

    return (
        <div className={`nav ${show && "navBlack"}`}>
            <img
            className="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix Logo"
            />
            <img
            onClick={navigation}
            className="navAvatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix Avatar"
            />
        </div>
    )
}

export default Nav
