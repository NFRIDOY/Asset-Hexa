import { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";

import { AuthContext } from "../../providers/AuthProvider";

const MyBlogsTable = () => {

  const { user } = useContext(AuthContext);
  console.log(user);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://asset-hexa-server.vercel.app/blog/${user?.email}`)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [user])

  // console.log(blogs);




  return (
    <div>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr className="">
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Author Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Image 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {/* Table Row Data */}{' '}



                  {
                    blogs.map(blog => <TableRow
                      key={blog._id}
                      blog={blog}
                    >


                    </TableRow>)
                  }



                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogsTable;