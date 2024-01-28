import axiosSecure from "."


// Save user data in database
export const saveUser = async user => {
    const currentUser = {
      email: user.email,
      role: 'guest',
      status: 'Verified',
      photoURL: user.photoURL,
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
  
    
    return data ;
  }