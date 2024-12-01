import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const RecomendetionMe = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    fetch(`https://altinfohub.vercel.app/recomforMe?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setQueries(data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-12">
        Recommendations for me
      </h1>
      <div>
        <div className="my-12">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-200">
              {/* Table Head */}
              <thead className="bg-rose-700 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Recommender Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Product Img
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Recommended Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Recommender Email
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {queries.map((c, index) => (
                  <tr
                    key={c._id}
                    className={`hover:bg-rose-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {c.productName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {c.RecommenderName}
                    </td>
                    <td className="px-6 py-4">
                      <img
                        src={c.productImage}
                        alt="Product"
                        className="w-16 h-16 rounded-md border border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {c.currentTimes}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {c.RecommenderEmail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendetionMe;
