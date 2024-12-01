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
  console.log(queries);
  return (
    <div className="mt-12 bg-base-200 p-5">
      <div className="text-center text-3xl font-bold my-10 ">
        <h1>Latest Queries</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {firstSixQueries.map((c) => (
          <div
            key={c._id}
            className="card bg-base-100 shadow-md rounded-lg overflow-hidden  "
          >
            {/* Product Image */}
            <figure className="relative w-full h-[180px] ">
              <img
                src={c.productImageURL}
                alt="Product"
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
            </figure>

            {/* Card Content */}
            <div className="card-body px-6 py-4">
              {/* Product Name */}
              <h2 className="card-title text-xl font-bold text-[#C73659] mb-2">
                {c.productName}
              </h2>
              <p className="text-base text-gray-700 mb-1">
                <span className="font-medium text-[#C73659]">Company:</span>{" "}
                {c.productBrand}
              </p>

              {/* Title and Reason */}
              <div className="text-gray-600 space-y-1 text-sm">
                <p>
                  <span className="font-medium text-[#C73659]">Title:</span>{" "}
                  {c.queryTitle.slice(0, 50)}...
                </p>
                <p>
                  <span className="font-medium text-[#C73659]">Reason:</span>{" "}
                  {c.boycottingReason.slice(0, 90)}...
                </p>
              </div>

              {/* Posted Time */}
              <p className="mt-2 text-gray-500 text-xs">
                <span className="font-medium text-[#C73659]">
                  Posted Time:{" "}
                </span>
                {new Date(c.userInfo.currentTimes).toLocaleString()}
              </p>
            </div>

            {/* User Info */}
            <div className="flex items-center bg-base-200 px-4 py-3 border-t border-gray-300">
              <img
                src={
                  c?.userInfo?.userImage || "https://via.placeholder.com/150"
                }
                alt="User Image"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="text-sm font-semibold ">
                  {c?.userInfo?.userName}
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
