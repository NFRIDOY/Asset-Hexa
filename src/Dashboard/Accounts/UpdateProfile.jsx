

const UpdateProfile = () => {

    // const handleSubmit = async event => {
    //     event.preventDefault()
    //     const form = event.target
    //     const name = form.name.value
    //     const email = form.email.value
    
    
    //     try {
   
    
    
    //       //4. update user data in database
    //       const dbResponse = await saveUser(result?.user)
    //       // console.log(dbResponse)
    //       // result.user.email
    
    
    
    
    //       toast.success('Profile update Successful')
    //       navigate('/')
    //     } catch (err) {
    //       console.log(err)
    //       toast.error(err?.message)
    //     }
    //   }



    return (
        <div className='flex justify-center items-center min-h-screen'>
          <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
            <div className='mb-8 text-center'>
              <h1 className='my-3 text-4xl font-bold'>Update Your Profile</h1>
              
            </div>
            <form
            //   onSubmit={handleSubmit}
              noValidate=''
              action=''
              className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
              <div className='space-y-4'>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Your Name Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
               
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
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
               
              </div>
    
              <div>
                <button
                  type='submit'
                  className='bg-emerald-400 w-full rounded-md py-3 text-white'
                >
                  Update Profile
                </button>
              </div>
            </form>
           
           
         
          </div>
        </div>
      )
};

export default UpdateProfile;