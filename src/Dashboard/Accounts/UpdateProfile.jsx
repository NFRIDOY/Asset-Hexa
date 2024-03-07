import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProfile = () => {

  const users = useLoaderData();

  const { _id, photoURL, displayName } = users;

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/dashboard/profile";



  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    //  const email = form.email.value;
    const photoURL = form.photoURL.value;



    const data = {

      displayName,

      photoURL,

    };

    //  console.log(data);

    fetch(`https://asset-hexa-server.vercel.app/users/update/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          navigate(from, { replace: true })
          Swal.fire({
            title: 'success!',
            text: 'Update Succesfull',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }



      });

  }

  return (
    // <div className=" bg-[#91F0AC]"> {/*  */}

    <div className="">
      {" "}
      <div className="">
        <h1 className="text-3xl md:text-4xl mt-20 text-center mb-10 font-bold ">Update your profile information</h1>

      </div>
      {/*  */}
      <div className=" flex justify-center  mt-5 ">


        <div className="  p-6 rounded-md bg-gradient-to-tr from-[#8dc487] to-[#b7f4b1f7]   w-1/2   ">
          <form onSubmit={handleUpdateProfile} >
            <div className=" mb-2">
              <label className="label">
                <span className="label-text text-3xl font-bold text-[#000]">
                  {" "}
                  displayName{" "}
                </span>
              </label>
              <input
                name="displayName"
                type="text"
                defaultValue={displayName}
                placeholder="type "
                className="shadow-xl outline-none input input-bordered input-primary w-full"
                required
              />
            </div>

            <div className=" mb-5">
              <label className="label">
                <span className="label-text text-3xl font-bold text-[#000]">
                  photoURL
                </span>
              </label>
              <input
                name="photoURL"
                type="text"
                defaultValue={photoURL}
                placeholder="photoURL url"
                className="shadow-xl input input-bordered input-primary w-full"
                required
              />
            </div>
            <div className="w-full flex justify-end">
              <button className=" bg-gradient-to-r from-[#0c4a24] via-[#084a24] to-[#073a27] hover:border-none  border-none hover:bg-primaryColor  text-white  btn ">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;