import useSubscriptionList from "../../hooks/useSubscriptionList";


const SubscriptionList = () => {

    const [payments] = useSubscriptionList()

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((pay, i)=>(
                                <tr key={pay._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>{i+1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pay.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                               
                                <td>{pay.name}</td>
                                <td>{pay.email}</td>
                                <th>
                                    <button className="btn bg-emerald-500 text-white">Send Email</button>
                                </th>
                            </tr>
                           
                            ))
                        }
                       
                        
                       
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default SubscriptionList;