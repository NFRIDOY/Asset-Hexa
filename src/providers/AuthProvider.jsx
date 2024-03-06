import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  GithubAuthProvider,
} from "firebase/auth";
import app from "./../utility/Firebase/firebase.config";
import PropTypes from "prop-types"; // ES6
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";
import { useLoginMutation } from "../features/authApiSlice";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const auth = getAuth(app);

  // google auth provider
  const googleProvider = new GoogleAuthProvider();

  // gitgub auth provider
  const githubProvider = new GithubAuthProvider();

  // const axiosPublic = useAxios();

  // create default 4 accounts for new users
  // const createDefaultAccounts = (group, account, amount = 0, description) => {
  //   const addAccount = {
  //     group, account, amount, description, email: user?.email,
  //   }

  //   axiosPublic.post('/accounts', addAccount)
  //     .then(res => {
  //       if (res.data.insertedId) {
  //         console.log(res.data);
  //         console.log('user balance added to the data base ');
  //         // Swal.fire({
  //         //   position: "top-end",
  //         //   icon: "success",
  //         //   title: "  Your has been added",
  //         //   showConfirmButton: false,
  //         //   timer: 1500
  //         // });
  //       }
  //     })
  // }

  /**
   * Create User By Email & Pass
   * Sign in with email and password
   * Sign in with google
   */
  const createUserEmailPass = (email, password) => {
    setLoading(true);
    // createDefaultAccounts(group, account, amount = 0, description)
    // createDefaultAccounts("Cash", "Cash", 0, "Default Account" )
    // createDefaultAccounts("Account", "Bkash", 0, "Default Account" )
    // createDefaultAccounts("Saving", "Saving", 0, "Default Account" )
    // createDefaultAccounts("Loan", "Loan", 0, "Default Account" )
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  /**
   * Logout
   */
  const logOut = () => {
    setLoading(true);
    toast.success("User Signed Out!!!");
    return signOut(auth);
  };

  /**
   * UseEffect for user
   */

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // console.log("unSubscribe")
      // console.log(currentUser);
      setUser(currentUser);

      if (currentUser) {
        // User is signed in
        const userData = await login({ user: currentUser?.email }).unwrap();
        // console.log(userData);
        dispatch(setCredentials({ ...userData, user: currentUser?.email }));
        setLoading(false);
        //{ email: currentUser.email };
        // console.log(loggedInUser)
      } else {
        // User is signed out
        // alert("User Signed Out!!!")
      }
    });

    return () => {
      unSubscribe();
    };
  }, [auth, dispatch, login]);

  //Update Ueser
  // const updateUser = (name, photoURL) => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoURL,
  //     // emailVerified : user.emailVerified
  //   })
  //     .then(() => {
  //       // Profile updated!
  //       // ...
  //       setUser(user);
  //       // toast.success(user.displayName)
  //       // toast.success(user.photoURL)
  //       // toast.success("Profile updated!")
  //       // logOut()
  //     })
  //     .catch((error) => {
  //       // An error occurred
  //       // ...
  //       // toast.success("Profile updated! Failed")
  //       console.log(error);
  //     });
  //   if (user !== null) {
  //     // The user object has basic properties such as display name, email, etc.
  //     const displayName = user.displayName;
  //     const email = user.email;
  //     // const photoURL = user.photoURL;
  //     const emailVerified = user.emailVerified;

  //     setUser(user);
  //     // The user's ID, unique to the Firebase project. Do NOT use
  //     // this value to authenticate with your backend server, if
  //     // you have one. Use User.getToken() instead.
  //     const uid = user.uid;
  //   }
  // };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const contextInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserEmailPass,
    signInEmailPass,
    googleSignIn,
    logOut,
    updateUser,
    githubSignIn,
  };

  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
}

// export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
