import Login from "./Components/Login"
import AuthUser from "./Context/AuthUser"




const App = () => {
  return (
   <AuthUser>
    <Login/>
   </AuthUser>
  )
}

export default App