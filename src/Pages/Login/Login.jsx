import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { saveUser } from "../../api/auth";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const { signInEmailPass, googleSignIn, loading, setUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'


  // form submit handler
  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {

      // User Login
      const result = await signInEmailPass(email, password)



      toast.success('Login Successful')
      navigate(from, { replace: true })
    } catch (err) {
      // console.log(err)
      toast.error(err?.message)
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //2. User Registration using google
      const result = await googleSignIn()

      //4. save user data in database
      const dbResponse = await saveUser(result?.user)
      // console.log(dbResponse)




      toast.success('Login Successful')
      navigate(from, { replace: true })
    } catch (err) {
      // console.log(err)
      toast.error(err?.message)
    }

  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.Email.value;
    const password = form.Password.value;
    // console.log(email, password);
    ''
    signInEmailPass(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
        alert("User Login")
        // console.log(user)
        // console.log(location.pathname)
        // console.log(location?.state)
        // getToken()
        navigate(location?.state ? location?.state : '/')
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert("User Login Failed")
        // console.log(" Error on CreateUser ", errorCode)
        // console.log(" Error on CreateUser ", errorMessage)
      });
  };

  const hangleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user)
        // console.log(user)
        // getToken()
        alert("User Login Using Google")
        // console.log(location.pathname)
        // console.log(location?.state)
        navigate(location?.state ? location?.state : '/')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("User Login Failed")
        // console.log(" Error on CreateUser ", errorCode)
        // console.log(" Error on CreateUser ", errorMessage)
      });
  }
  const hangleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user)
        // console.log(user)
        // getToken()
        alert("User Login Using Github")
        // console.log(location.pathname)
        // console.log(location?.state)
        navigate(location?.state ? location?.state : '/')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("User Login Failed")
        // console.log(" Error on CreateUser ", errorCode)
        // console.log(" Error on CreateUser ", errorMessage)
      });
  }


  return (
    <div className=' lg:flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100  text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-emerald-400 font-bold'>
            Sign in to access at Asset-hexa
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-emerald-400 w-full rounded-md py-3 text-white'
            >
              { (
                'Continue'
              )}
            </button>
          </div>
        </form>
        {/* <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-emerald-400 text-gray-400'>
            Forgot password?
          </button>
        </div> */}
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/register'
            className='hover:underline hover:text-rose-500 text-emerald-400'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
};

export default Login;
