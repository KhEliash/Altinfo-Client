import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const LatestCard = () => {
  const queries = useLoaderData();
  const [firstSixQueries, setFirstSixQueries] = useState([]);
  // console.log(firstSixQueries);

  useEffect(() => {
    const sortedQueries = [...queries].sort(
      (a, b) =>
        new Date(b.userInfo.currentTimes) - new Date(a.userInfo.currentTimes)
    );
    const firstSix = sortedQueries.slice(0, 6);
    setFirstSixQueries(firstSix);
  }, [queries]);
  // console.log(queries);
  return (
    <div className="mt-12 bg-base-200 p-5">
      <div className="text-center text-3xl font-bold my-10 ">
        <h1>Latest Queries</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {firstSixQueries.map((c) => (
          <div key={c._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={c.productImageURL}
                alt="Shoes"
                className="rounded-xl h-[150px] "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <span className="font-bold text-2xl text-[#C73659]">Name:</span>
                {c.productName}
              </h2>
              <p className="text-2xl font-bold">
                <span className="font-bold text-2xl text-[#C73659]">
                  Company:
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
              <p className="text-left w-full">
                <span className="font-bold text-2xl text-[#C73659]">
                  Posted Time:{" "}
                </span>
                {c.userInfo.currentTimes}
              </p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  //   </div>;
};

export default LatestCard;
