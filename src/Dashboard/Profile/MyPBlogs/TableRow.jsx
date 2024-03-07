
import { Link } from 'react-router-dom';

const TableRow = ({ blog, handelDelete }) => {
  const { _id } = blog;

  return (
    <tr>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {blog?.author}
      </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">{blog?.title}</div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={blog?.image}
                className="mx-auto object-cover rounded h-10 w-10 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className='border-gray-200 bg-white ' >
        <Link to={`/dashboard/updateblogs/${_id}`}>
          <button className="ml-3 bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none border-none hover:bg-primaryColor text-white btn btn-sm">
            Update
          </button>
        </Link>
      </td>
      <td className='border-gray-200 bg-white '>
        <div >
          <button
            onClick={() => handelDelete(_id)}
            className="ml-3 bg-gradient-to-r from-[#a42323] via-[#c1300b] to-[#a0260d] hover:border-none border-none hover:bg-primaryColor text-white btn btn-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
