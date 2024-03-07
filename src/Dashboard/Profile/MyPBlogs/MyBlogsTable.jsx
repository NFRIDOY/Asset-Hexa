import { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";

import { AuthContext } from "../../../providers/AuthProvider";
import Loader from "../../../Route/loader";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyBlogsTable = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // console.log(user);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/blogs/byemail/${user?.email}`)
      .then((res) => setBlogs(res?.data));
    setLoading(false);
  }, [user, axiosSecure]);

  // console.log(blogs);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this blog!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/blogs/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Blog has been Deleted!",
              showConfirmButton: false,
              timer: 1500,
            });

            const remaining = blogs.filter((blog) => blog._id !== id);
            setBlogs(remaining);
          }
        });
      } else if (result.isDismissed) {
        Swal.fire({
          title: "Cancelled",
          text: "Your blog is safe!",
          icon: "error",
          confirmButtonText: "OK!",
        });
      }
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="">
                  {/* <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Author Name
                  </th> */}
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Update
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <TableRow
                    key={blog._id}
                    blog={blog}
                    handelDelete={handelDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogsTable;
