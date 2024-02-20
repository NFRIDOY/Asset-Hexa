import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useSubscriptionList = () => {

    const axiosPublic = useAxios()

    const {data: payments = [], isPending: loading, refetch}=useQuery({
        queryKey:['payments'],
        queryFn: async()=>{
            // const res = await axiosPublic.get('http://localhost:5000/payments')
            const res = await axiosPublic.get('/payments')
            return res.data
        }
    })

    return [payments,loading,refetch]
};

export default useSubscriptionList;