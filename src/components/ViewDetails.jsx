import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  const [queries, setQueries] = useState({});
  console.log(queries);
  useEffect(() => {
    fetch(`http://localhost:5000/singleQueries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  // form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const productNameQ = form.productName.value;
    const productImage = form.productImage.value;
    const reason = form.reason.value;
    const queryId = product._id;
    const queryTitle = product.queryTitle;
    const productName = product.productName;
    const userEmail = product.userInfo.userEmail;
    const userName = product.userInfo.userName;
    const RecommenderEmail = user.email;
    const RecommenderName = user.displayName;
    // Get the current timestamp in milliseconds
    const currentTimeInMillis = Date.now();

    // Convert the timestamp to a human-readable format
    const currentTime = new Date(currentTimeInMillis);

    const currentTimes = currentTime;
    const recoProduct = {
      title,
      productNameQ,
      productImage,
      reason,
      queryId,
      queryTitle,
      productName,
      userEmail,
      userName,
      RecommenderEmail,
      RecommenderName,
      currentTimes,
    };
    console.log(recoProduct);

    //   post data to mongodb
    fetch(" http://localhost:5000/recommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recoProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            text: "You Successfully Added Recommendation",
            title: "Please reload the page for recommendation count",
            icon: "success",
          });
        }
      });
  };

  const handleIncrement = (id) => {
    console.log("object", id);
    fetch(`http://localhost:5000/updateQuerie/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  // all recom
  useEffect(() => {
    fetch(`http://localhost:5000/recom?queryId=${product._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQueries(data);
      });
  }, [product]);

  return (
    <div className="w-full  items-center flex flex-col justify-center">
      <div className="bg-base-200 mt-12 shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-2/3 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 ">
          <img
            src={product.productImageURL}
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-4">
          <p className="text-gray-600 mb-2">
            <strong>Product Name:</strong> {product.productName}
          </p>
          <h2 className="text-xl font-semibold mb-2">
            <strong>Queries Title</strong>
            {product.queryTitle}
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Brand Name:</strong> {product.productBrand}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Alternation Reason:</strong> {product.boycottingReason}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Date Posted:</strong> {product.userInfo?.currentTimes}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Recommendation Count:</strong>{" "}
            {product.userInfo?.recommendationCount}
          </p>
        </div>
      </div>

      <div className="bg-base-200 shadow-md rounded-lg p-4 max-w-xl w-full mx-auto mt-6">
        <h2 className="font-bold">User Info:</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              src={product.userInfo?.userImage}
              alt=""
              className="h-12 w-12 rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-800">
              {product.userInfo?.userName}
            </h2>
            <p className="text-gray-600">{product.userInfo?.userEmail}</p>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="max-w-md mt-12 mx-auto p-12 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-rose-600">
          Add Recommendation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-12">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Recommendation Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter recommendation title"
            />
          </div>
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Recommended Product Name
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter recommended product name"
            />
          </div>
          <div>
            <label
              htmlFor="productImage"
              className="block text-sm font-medium text-gray-700"
            >
              Recommended Product Image
            </label>
            <input
              type="text"
              name="productImage"
              id="productImage"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter URL of product image"
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700"
            >
              Recommendation Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter recommendation reason"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => handleIncrement(id)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-rose-700 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Recommendation
            </button>
          </div>
        </form>
      </div>

      {/* all reco for this pro. */}
      <div></div>
    </div>
  );
};

export default ViewDetails;
