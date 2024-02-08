import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useBusiness = (id) => {
    const { data: business = {}, refetch } = useQuery({
        queryKey: ["singleBusinessData"],
        enabled: !!id,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/bussiness/${id}`);
            return res.data;
        },
    });
    return { business, refetch };
};


export default useBusiness;