/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const TableRow = ({blog , handelDelete}) => {


    const {_id} = blog;
    // console.log(_id);


  


    return (
        <tr className="">
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               {blog?.author}
            </td>
            <td className='px-5 py-5 border-b  border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>

                    {blog?.title}
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={blog?.image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>

                </div>
            </td>
            
            <td className=''>
                <Link to={`/dashboard/updateblogs/${blog._id}`}>
                <button className='  ml-3 bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white btn btn-sm '>
                    Update
                </button>
                
                </Link>
            </td>
            <td className=''>
                <div className=''>
                    <button onClick={()=> handelDelete(_id)  } className=' ml-3   bg-gradient-to-r from-[#a42323] via-[#c1300b] to-[#a0260d] hover:border-none  border-none hover:bg-primaryColor  text-white btn btn-sm '>
                        Delete
                    </button>
                </div>
            </td>

        </tr>
    )
}

export default TableRow