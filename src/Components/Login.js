import { useContext, useRef } from "react"
import { userdata } from "../Context/AuthUser"
import { submitHandle } from "../Utils/AuthValidate";


const Login = () => {
  const {userDetails ,setUserDetails} = useContext(userdata);
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      {userDetails.userId ? <p>You are logged in ,  your name is {userDetails.name}</p>:<>
      <span>User Name : </span>
        <input ref={usernameRef} type="text" placeholder="User Name"/><br />
        <span>User Password : </span>
        <input ref={passwordRef} type="password" placeholder="User Password"/><br />
        <button onClick={()=>submitHandle(usernameRef, passwordRef, setUserDetails)}>Submit</button>
      </>}
    </div>
  )
}

export default Login