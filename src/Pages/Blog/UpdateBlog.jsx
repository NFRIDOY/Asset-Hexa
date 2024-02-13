// import Swal from "sweetalert2";
// import useAuth from "../../api/useAuth";
// import useAxios from "../../hooks/useAxios";

const UpdateBlog = () => {

   
    // const { user } = useAuth();
    
    // const axiosPublic = useAxios();

    
    
    // const handleUpdateBlog = (e) => {
    //   e.preventDefault();
    //   const form = e.target;
    //   const title = form.title.value;
    //   const description = form.description.value;
    //   const image = form.image.value;
  
     
  
    //   const data = {
        
    //     title,
    //     description,
    //     image,
       
    //   };
    //   // console.log(formattedDate);
    //   axiosPublic
    //   .patch(`/blog/${user?.email}`, data)
    //   .then((res) => {
    //     if (res.data?.modifiedCount) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Your Blogs has been update!",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
          
    //       e.target.reset();
    //     }
    //   });
  
    // }

    return (
        // <div className=" bg-[#91F0AC]"> {/*  */}
    
        <div className="">
          {" "}
          <div className="">
          <h1 className="text-3xl md:text-4xl mt-20 text-center mb-10 font-bold ">Update your Blog</h1>

          </div>
          {/*  */}
          <div className=" flex justify-center  mt-5 ">
            
            
            <div className="  p-6 rounded-md bg-gradient-to-tr from-[#8dc487] to-[#b7f4b1f7]   w-1/2   ">
              <form  >
                <div className=" mb-2">
                  <label className="label">
                    <span className="label-text text-3xl font-bold text-[#000]">
                      {" "}
                      Title{" "}
                    </span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="type "
                    className="shadow-xl outline-none input input-bordered input-primary w-full"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="label">
                    <span className="label-text text-3xl font-bold text-[#000]">
                      Description{" "}
                    </span>
                  </label>
                  <textarea
                    name="description"
                    className="w-full shadow-xl textarea textarea-primary"
                    placeholder="type"
                    required
                  ></textarea>
                </div>
                <div className=" mb-5">
                  <label className="label">
                    <span className="label-text text-3xl font-bold text-[#000]">
                      Image
                    </span>
                  </label>
                  <input
                    name="image"
                    type="text"
                    placeholder="image url"
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

export default UpdateBlog;