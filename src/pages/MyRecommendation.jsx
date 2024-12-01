import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyRecommendation = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  const [control, setControl] = useState(false);
  //   console.log(queries);
  // all recom
  useEffect(() => {
    fetch(`https://altinfohub.vercel.app/myrecom?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setQueries(data);
      });
  }, [user, control]);

  const handleDelete = (id1, id2) => {
    // console.log(id1, id2);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://altinfohub.vercel.app/delete/${id1}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              fetch(`https://altinfohub.vercel.app/updateInc/${id2}`, {
                method: "PUT",
              })
                .then((res) => res.json())
                .then((data) => {
                  //   console.log(data);
                  setControl(!control);
                });

              setControl(!control);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-12">
        My Recommendations
      </h1>
      <div className="my-12">
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Table Head */}
            <thead className="bg-rose-700 text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  No
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  Poster Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold">
                  Product Img
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold">
                  Delete
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
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {c.productNameQ}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {c.userName}
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={c.productImage}
                      alt="Product"
                      className="w-14 h-14 rounded-md border border-gray-300"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(c._id, c.queryId)}
                      className="px-3 py-1 bg-rose-600 text-white text-sm font-semibold rounded-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyRecommendation;
