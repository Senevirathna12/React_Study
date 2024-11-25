export const submitHandle = (username,password,setFunc) => {
    setFunc((pre)=>({
      ...pre,
      userId: username.current.value,
      password : password.current.value,
      name : username.current.value
    }))
  }