import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
//   console.log(id, product);
  useEffect(() => {
    fetch(`http://localhost:5000/singleQueries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      });
  }, [id]);
  return (
    <div>
      view
      <img src={product.productImageURL} alt="" />
    </div>
  );
};

export default ViewDetails;
