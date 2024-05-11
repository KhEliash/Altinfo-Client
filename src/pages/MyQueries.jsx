import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState();
  const [querie, setQuerie] = useState([]);
  const arr = querie.sort(
    (a, b) =>
      new Date(b.userInfo.currentTimes) - new Date(a.userInfo.currentTimes)
  );
  console.log(arr);
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
      <div></div>
    </div>
  );
};

export default MyQueries;
