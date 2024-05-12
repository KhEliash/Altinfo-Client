import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState();
  const [querie, setQuerie] = useState([]);

  const arr = querie.sort(
    (a, b) =>
      new Date(b.userInfo.currentTimes) - new Date(a.userInfo.currentTimes)
  );
  // console.log(arr);
  //   const querie = queries;
  //   console.log(querie);
  // get data my email
  useEffect(() => {
    fetch(`http://localhost:5000/myQueries?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setQueries(data);
        setQuerie(data);
      });
  }, [user]);

  //     if (querie.length > 0) {
  //       const sortedQuerie = querie.slice().sort((a, b) => new Date(b.userInfo.currentTimes) - new Date(a.userInfo.currentTimes));
  //       setQuerie(sortedQuerie);
  //     }
  //   }, [querie]);

  return (
    <div>
      {/* add queries div */}
      <div className="mt-8 bg-[#EEEEEE] p-5 text-center">
        <h2 className="text-2xl font-semibold mb-4">Add Queries</h2>
        <p className="text-gray-600 mb-4">Wanna add a queries? Add one....</p>
        <Link to={"/addqueries"}>
          <button className="bg-[#A91D3A] hover:bg-[#C73659] text-white font-bold py-2 px-4 rounded">
            Add Query
          </button>
        </Link>
      </div>

      {/* my queries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12  bg-[#EEEEEE] p-4 rounded-xl">
        {querie.map((c) => (
          <div key={c._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={c.productImageURL}
                alt="Shoes"
                className="rounded-xl h-[250px] "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{c.productName}</h2>
              <p className="text-2xl font-bold"> {c.productBrand}</p>
              <div className="card-actions">
                <Link to={`/viewdetails/${c._id}`}>
                  <button className="btn bg-[#c0425c] hover:bg-[#C73659] text-white">
                    View Details
                  </button>
                </Link>
                <button className="btn bg-[#1da957] hover:bg-[#36c7a7] text-white">
                  Update
                </button>
                <button className="btn bg-[#A91D3A] hover:bg-[#C73659] text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
