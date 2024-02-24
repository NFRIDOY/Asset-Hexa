import axiosSecure from "."


// Save user data in database
export const saveUser = async user => {

  
    const currentUser = {
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      role: 'guest',
      status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
  
    return data ;
  }