import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyRecommendation = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  const [control, setControl] = useState(false);
  // all recom
  useEffect(() => {
    fetch(` http://localhost:5000/myrecom?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQueries(data);
      });
  }, [user,control]);


  const handleDelete = (id) => {
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
        fetch(` http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
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
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Poster Name</th>
                <th>Product Img</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((c,index) => (
  
              <tr key={c._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  {c.productName}
                </td>
                <td>
                 {c.userName}
                </td>
                <td>
                    <img src={c.productImage} alt="" className="w-12 h-12"/>
                </td>
                <th>
                  <button
                   onClick={() => handleDelete(c._id)}
                  className="btn bg-rose-600 text-white btn-xs">
                    
                    Delete
                  </button>
                </th>
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
