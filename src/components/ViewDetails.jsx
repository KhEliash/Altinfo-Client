import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
    console.log( product.userInfo);
  useEffect(() => {
    fetch(`http://localhost:5000/singleQueries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      });
  }, [id]);
  return (
    <div className="w-full bg-[#EEEEEE] items-center flex flex-col justify-center">
     
    
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-2/3 flex flex-col md:flex-row items-center justify-center">
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
            {product.queryTitle}</h2>
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
            <strong>Recommendation Count:</strong> {product.userInfo?.recommendationCount}
          </p>
        </div>
      </div>
     

    <div className="bg-white shadow-md rounded-lg p-4 max-w-xl w-full mx-auto mt-6">
      <h2 className="font-bold">User Info:</h2>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={product.userInfo?.userImage} alt= '' className="h-12 w-12 rounded-full" />
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-800">{product.userInfo?.userName}</h2>
          <p className="text-gray-600">{product.userInfo?.userEmail}</p>
        </div>
      </div>
    
    </div>

    
    </div>
  );
};

export default ViewDetails;
