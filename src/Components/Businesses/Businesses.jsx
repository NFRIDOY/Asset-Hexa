/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Loader from "../../Route/loader";
import BusinessCard from "../BusinessCard/BusinessCard";
import { useLoaderData } from "react-router-dom";

export default function Businesses() {
  const axiosPublic = useAxios();
  const [loading, setLoading] = useState(true);
  const [businessData, SetBusinessData] = useState([]);
  const { count } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [BusinessPerPage, setBusinessPerPage] = useState(9);
  const numberOfPage = Math.ceil(count / BusinessPerPage);
  const pages = [...Array(numberOfPage).keys()];

  useEffect(() => {
    setLoading(true);
    // axios.get("http://localhost:5000/bussiness").then((data) => {
    axiosPublic
      .get(`/business?page=${currentPage}&size=${BusinessPerPage}`)
      .then((data) => {
        SetBusinessData(data?.data);
        setLoading(false);
        // console.log(data.data)
        // console.log(data.data);
      });
  }, [axiosPublic, currentPage, BusinessPerPage]);
  // console.log(businessData);

  const handleBusinessPerPage = (e) => {
    const val = parseInt(e.target.value);
    // console.log(val);
    setBusinessPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  // console.log(pages);

  if (loading) return <Loader />;
  return (
    <div>
      {/* All Businesses*/}
      {businessData?.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 max-w-7xl mx-auto px-2">
          {businessData?.map((bus) => (
            <BusinessCard key={bus?._id} business={bus} />
          ))}
        </div>
      ) : (
        <div className="text-center border-0 text-5xl font-bold my-10">
          No Data
        </div>
      )}
      <div>
        <div className="mt-20 flex justify-center">
          <div>
            <button className="btn btn-sm" onClick={handlePrevPage}>
              prev
            </button>
            {pages?.map((page) => (
              <button
                className={`md:ml-5  btn btn-sm ${
                  page === currentPage ? "text-white bg-[#38d626]" : ""
                }`}
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {parseInt(page) + 1}
              </button>
            ))}
            <button className="btn btn-sm md:ml-5" onClick={handleNextPage}>
              Next
            </button>
            <select
              onChange={handleBusinessPerPage}
              className="ml-5 text-white bg-[#38d626] btn-sm rounded-xl "
              value={BusinessPerPage}
            >
              <option value="9">9</option>
              <option value="18">18</option>
              <option value="27">27</option>
              <option value="36">36</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}