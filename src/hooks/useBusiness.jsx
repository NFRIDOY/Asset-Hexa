import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxios from "./useAxios";


const useBusiness = (id) => {
    const axiosPublic = useAxios();
    const { data: business = {}, refetch } = useQuery({
        queryKey: ["singleBusinessData"],
        enabled: !!id,
        queryFn: async () => {
            const res = await axiosPublic.get(`/bussiness/${id}`);
            
            return res.data[0];
        },

    });
    return { business , refetch };
};


export default useBusiness;