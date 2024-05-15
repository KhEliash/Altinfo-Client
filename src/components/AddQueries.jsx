import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddQueries = () => {
  const { user } = useContext(AuthContext);
  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImageURL = form.productImageURL.value;
    const queryTitle = form.queryTitle.value;
    const boycottingReason = form.boycottingReason.value;
    const userEmail = user.email;
    const userName = user.displayName;
    const userImage = user.photoURL;
    const recommendationCount = 0;

    // Get the current timestamp in milliseconds
    const currentTimeInMillis = Date.now();

    // Convert the timestamp to a human-readable format
    const currentTime = new Date(currentTimeInMillis);

    const currentTimes = currentTime;

    const product = {
      productName,
      productBrand,
      productImageURL,
      queryTitle,
      boycottingReason,
      userInfo: {
        userEmail,
        userName,
        userImage,
        currentTimes,
        recommendationCount,
      },
    };
    //   post data to mongodb
    fetch("https://altinfohub.vercel.app/queries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            text: "You Successfully Added a Query!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center bg-[#EEEEEE]">
      <div className="shadow-2xl w-2/3 lg:h-1/2 bg-[#C73659] rounded-xl  my-6">
        <form
          className="max-w-lg mx-auto mt-8 px-4 lg:px-0 "
          onSubmit={handleAdd}
        >
          <div className="mb-4">
            <label className="block     font-bold mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              className=" input input-bordered  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productName"
              type="text"
              name="productName"
              placeholder="Enter product name"
            />
          </div>

          <div className="mb-4">
            <label className="block     font-bold mb-2" htmlFor="productBrand">
              Product Brand
            </label>
            <input
              className="input input-bordered  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productBrand"
              type="text"
              name="productBrand"
              placeholder="Enter product brand"
            />
          </div>

          <div className="mb-4">
            <label
              className="block    font-bold mb-2"
              htmlFor="productImageURL"
            >
              Product Image URL
            </label>
            <input
              className="input input-bordered  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productImageURL"
              type="text"
              name="productImageURL"
              placeholder="Enter product image URL"
            />
          </div>

          <div className="mb-4">
            <label className="block    font-bold mb-2" htmlFor="queryTitle">
              Query Title
            </label>
            <input
              className=" input input-bordered  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="queryTitle"
              type="text"
              name="queryTitle"
              placeholder="Enter query title"
            />
          </div>

          <div className="mb-4">
            <label
              className="block     font-bold mb-2"
              htmlFor="boycottingReason"
            >
              Boycotting Reason Details
            </label>
            <textarea
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="boycottingReason"
              name="boycottingReason"
              placeholder="Enter boycotting reason details"
              rows="4"
            ></textarea>
          </div>

          <button
            className="btn-block mb-3 bg-[#151515] hover:bg-[#9d4242] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;
