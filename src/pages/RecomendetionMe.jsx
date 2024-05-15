import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const RecomendetionMe = () => {
  const {user}=useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    fetch(`https://altinfohub.vercel.app/recomforMe?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setQueries(data);
      });
  }, [user]);
  return <div>
    <h1 className="font-bold text-3xl text-center my-12">Recommendations for me</h1>
    <div>
    <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Recommender Name</th>
                <th>Product Img</th>
                <th>Recommended Time</th>
                <th> Recommender email</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((c, index) => (
                <tr key={c._id}>
                  <th>{index + 1}</th>
                  <td>{c.productName}</td>
                  <td>{c.RecommenderName}</td>
                  <td>
                    <img src={c.productImage} alt="" className="w-12 h-12" />
                  </td>
                  <td>
                    {c.currentTimes}
                  </td>
                  <th>
                   {c.RecommenderEmail}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  </div>;
};

export default RecomendetionMe;
