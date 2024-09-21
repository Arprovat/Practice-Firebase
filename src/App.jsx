
import { useState } from 'react';
import './App.css'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './Firebase/Firebase-init';


const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const GithubProvider = new GithubAuthProvider();
function App() {
  const [User,setUser] = useState(null);
const  handleGoogleLogin=()=>{
  signInWithPopup(Auth,Provider)
  .then((result)=>{
console.log(result.user);
setUser(result.user);
  })
  .catch(error =>{

    console.log(error.message)
  }

  )
}
const handlesignOut =()=>{
  signOut(Auth)
  .then(()=>{
    setUser(null);

  })
  .catch((error)=>{
console.log(error.message);
  })
}
const handleFacebookLogin =()=>{
  signInWithPopup(Auth,facebookProvider)
  .then((result)=>{
    setUser(result.user);
    console.log(result.user)
  })
  .catch((error)=>{
    console.log(error.message)
  })
}
const handleGithubLogin=()=>{
  signInWithPopup(Auth,GithubProvider)
  .then(res =>{
    console.log(res.user);
    setUser(res.user);
  })
  .catch(error =>{console.log(error.message)})
}
  return (
    <>
      <div>
        <h1>Login Here</h1>
      {User ? 
      <button onClick={handlesignOut}>sign Out</button>
       :<>
       
       <button onClick={handleGoogleLogin}>Google Login</button>
       <button onClick={handleFacebookLogin}>
        Facebook Login
       </button>
       <button onClick={handleGithubLogin}>Github</button>
       </>}
      </div>
    {
      User && <h2>Username:{User.displayName}
      </h2>
    }
    </>
  )
}

export default App
