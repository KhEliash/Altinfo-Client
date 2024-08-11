import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const queries = useLoaderData();
  const [columns, setColumns] = useState(3);
  const allQuaries = queries;
  console.log(allQuaries);

  allQuaries.sort((a, b) => {
    const timeA = new Date(a.userInfo.currentTimes);
    const timeB = new Date(b.userInfo.currentTimes);
    return timeB - timeA;
  });
  // console.log(allQuaries);
  const handleGridToggle = (event) => {
    setColumns(parseInt(event.target.value, 10));
  };

  return (
    <div className="my-12 bg-base-200 p-5">
      {/* search bar */}

      {/* Toggle buttons for grid column change*/}
      <div className="flex justify-center mb-4">
        <select
          onChange={handleGridToggle}
          className="bg-red-800 text-white p-2 rounded border-none"
          value={columns}
        >
          <option value={1}>1 Column</option>
          <option value={2}>2 Columns</option>
          <option value={3}>3 Columns</option>
        </select>
      </div>

      <div
        className={`grid ${
          columns === 1
            ? "grid-cols-1"
            : columns === 2
            ? "grid-cols-2"
            : "grid-cols-3"
        } gap-4`}
      >
        {allQuaries.map((c) => {
          return (
            <div key={c._id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={c.productImageURL}
                  alt="Shoes"
                  className="rounded-xl h-[250px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="text-left space-y-1">
                  <h2 className="card-title">
                    <span className="font-bold text-2xl text-[#C73659]">
                      Name:
                    </span>
                    {c.productName}
                  </h2>
                  <p className="text-2xl font-bold">
                    <span className="font-bold text-2xl text-[#C73659]">
                      Company :
                    </span>{" "}
                    {c.productBrand}
                  </p>
                  <div className="text-left text-gray-600 space-y-3">
                    <p className="text-2xl ">
                      <span className="font-bold text-2xl text-[#C73659]">
                        Title:{" "}
                      </span>
                      {c.queryTitle.slice(0, 50)}...
                    </p>
                    <p className=" text-2xl">
                      <span className="font-bold text-2xl text-[#C73659]">
                        Reason:{" "}
                      </span>
                      {c.boycottingReason.slice(0, 90)}...
                    </p>
                  </div>
                  <p>
                    <span className="font-bold text-2xl text-[#C73659]">
                      Posted Time:{" "}
                    </span>
                    {c.userInfo.currentTimes}
                  </p>
                </div>
                <div className="flex items-center justify-around bg-gray-300 p-2 rounded-xl w-full">
                  <img
                    src={c.userInfo.userImage}
                    alt=""
                    className="rounded-full"
                  />
                  <h3 className="text-2xl font-bold ">
                    <span className="font-bold text-2xl text-[#C73659]">
                      User Name:{" "}
                    </span>
                    {c.userInfo.userName}
                  </h3>
                </div>
                <div className="card-actions flex items-center justify-between w-full">
                  <h3 className=" text-2xl text-green-500">
                    <span className="font-bold text-2xl text-[#C73659]">
                      Recommendation Count:{" "}
                    </span>
                    {c.userInfo.recommendationCount}
                  </h3>
                  <Link to={`/viewdetails/${c._id}`}>
                    <button className="btn bg-[#c0425c] hover:bg-[#C73659] text-white">
                      Recommended
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Queries;
