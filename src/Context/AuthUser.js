import { createContext, useState } from "react"

export const userdata = createContext({});

const AuthUser = ({children}) => {

  const [userDetails , setUserDetails] = useState({
    name :'',
    password : '',
    userId : ''
  })

  return (
    <userdata.Provider value={{userDetails ,setUserDetails}}>{children}</userdata.Provider>
  )
}

export default AuthUser