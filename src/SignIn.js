import React, { useRef, useEffect } from "react";
import { auth } from "./firebase";
import "./SignIn.css";
import { login,logout } from "./slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";



function SignIn() {
  const dispatch = useDispatch();
   const  emailRef = useRef(null);
   const  passwordRef = useRef(null);
   const navigate = useNavigate()

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Log in
        console.log(userAuth)
        dispatch(login({uid: userAuth.uid, email: userAuth.email}))
      }else{
        //log out
        dispatch(logout())
      }
    })
    
      return unsubscribe
    }, [dispatch]);
    

    const register =(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
         passwordRef.current.value
        ).then((authUser)=>{
        console.log(authUser)
        navigate("/App")
        }).catch(err => {
            alert(err.message)
        })
    }
    const signInto =(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(
          emailRef.current.value,
       passwordRef.current.value
      ).then((authUser)=>{
      console.log(authUser)
      navigate("/App")
      }).catch(err => {
          alert(err.message)
      })
    }
  return (
    <div className="signIn-container">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef}  type="password" placeholder="Password" />
        <button type="submit" onClick={signInto }>Sign In</button>
        <h4>
          <span className="signIn-grey"> New to Netflix? </span> <span onClick={register} className="signIn-link"> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
