import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import Hero from './components/Hero'
import fire from './fire'

function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleSignIn = () =>{
    clearErrors()
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
        default:
          console.log(error.message);
      }
    })
  }
  const handleSignUp = () => {
    clearErrors()
     fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
        default:
          console.log(error.message);
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut()
  }

  useEffect(()=>{
    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
      if(user){
        clear()
        setUser(user)
      } else {
        setUser("")
      }
      })
    }
    authListener()
  },[])

  const clear = () => {
    setEmail("")
    setPassword("") 
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }

  return (
    <div className="w-screen h-screen bg-gray-50">
    {user ? (
      <Hero handleLogout={handleLogout} />
    ) : (
      <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleSignUp={handleSignUp}
        handleSignIn={handleSignIn}
        emailError={emailError}
        passwordError={passwordError} 
      />
    ) }
    </div>
  )
}

export default App;
