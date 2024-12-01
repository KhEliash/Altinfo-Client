import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const queries = useLoaderData();
  const [columns, setColumns] = useState(3);
  const allQuaries = queries;

  allQuaries.sort((a, b) => {
    const timeA = new Date(a.userInfo.currentTimes);
    const timeB = new Date(b.userInfo.currentTimes);
    return timeB - timeA;
  });

  const handleGridToggle = (event) => {
    setColumns(parseInt(event.target.value, 10));
  };

  // search
  const [searchText, setSearchText] = useState("");

  const [products, setProducts] = useState([]);
  if (products.length === 0) {
    setProducts(allQuaries);
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://altinfohub.vercel.app/products/search?q=${searchText}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="py-12 bg-base-200 p-5">
      {/* search bar */}

      <div className="flex justify-center items-center mb-5">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search products..."
          className="p-2 rounded-l-md border border-rose-700 outline-rose-800"
        />
        <button
          onClick={fetchProducts}
          className="p-2 bg-rose-800 text-white rounded-r-md border border-rose-800 hover:bg-rose-700"
        >
          Search
        </button>
      </div>

      {/* Toggle buttons for grid column change*/}
      {/* <div className="flex justify-center mb-4">
        <select
          onChange={handleGridToggle}
          className="bg-red-800 text-white p-2 rounded border-none"
          value={columns}
        >
          <option value={1}>1 Column</option>
          <option value={2}>2 Columns</option>
          <option value={3}>3 Columns</option>
        </select>
      </div> */}

      <div
        // className={`grid ${
        //   columns === 1
        //     ? "grid-cols-1"
        //     : columns === 2
        //     ? "grid-cols-2"
        //     : "grid-cols-3"
        // } gap-4`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {products.map((c) => {
          return (
            <div
              key={c._id}
              className="card bg-base-100 shadow-md rounded-md overflow-hidden border border-gray-200"
            >
              {/* Image Section */}
              <figure className="p-3">
                <img
                  src={c.productImageURL}
                  alt="Product"
                  className="rounded-md h-36 object-contain w-full"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body p-4 space-y-2">
                {/* Product Details */}
                <h2 className="text-base font-semibold text-[#C73659] truncate">
                  {c.productName}
                </h2>
                <p className="text-sm text-gray-600 truncate">
                  <span className="font-medium">Brand:</span> {c.productBrand}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  <span className="font-medium">Title:</span>{" "}
                  {c.queryTitle.slice(0, 40)}...
                </p>
                <p className="text-sm text-gray-600 truncate">
                  <span className="font-medium">Reason:</span>{" "}
                  {c.boycottingReason.slice(0, 60)}...
                </p>

                {/* Meta Info */}
                <p className="text-xs text-gray-400">
                  <span className="font-medium">Posted:</span>{" "}
                  {c.userInfo.currentTimes}
                </p>

                {/* User Info */}
                <div className="flex items-center bg-gray-100 rounded-md p-2">
                  <img
                    src={c.userInfo.userImage}
                    alt="User"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="text-xs">
                    <p className="font-medium">{c.userInfo.userName}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-semibold text-green-500">
                    Recommendations: {c.userInfo.recommendationCount}
                  </p>
                  <Link to={`/viewdetails/${c._id}`}>
                    <button className="btn btn-sm bg-rose-700  hover:bg-rose-800 text-white rounded-md">
                      View Details
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
