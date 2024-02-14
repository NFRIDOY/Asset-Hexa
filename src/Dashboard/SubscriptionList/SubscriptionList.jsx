import useSubscriptionList from "../../hooks/useSubscriptionList";

const SubscriptionList = () => {
    const [payments] = useSubscriptionList();

    const handleSendToAll = () => {
        const emailList = payments.map(pay => pay.email).join(",");
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailList)}`;
        window.open(gmailUrl, '_blank');
    };

    const handleSendEmail = (email) => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        window.open(gmailUrl, '_blank');
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>
                                <button onClick={handleSendToAll} className="btn bg-emerald-500 text-white">Send To All</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((pay, i) => (
                            <tr key={pay._id}>
                               
                                <td>{i + 1}</td>
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
                                    <button onClick={() => handleSendEmail(pay.email)} className="btn bg-emerald-500 text-white">Send Email</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubscriptionList;
