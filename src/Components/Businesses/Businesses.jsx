import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Loader from "../../Route/loader";
import axios from "axios";


export default function Businesses() {
    const [loading, setLoading] = useState(true);
    const [businessData, SetBusinessData] = useState([]);
    const axiosPublic = useAxios();
    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/blogs").then((data) => {
        // axiosPublic.get("/blogs").then((data) => {
            SetBusinessData(data.data);
            setLoading(false);
            // console.log(data.data);
        });
    }, [axiosPublic]);
    // console.log(Blogg);

    if (loading) return <Loader />;
    return (
        <div>
            {/* All Businesses*/}

        </div>
    )
}
