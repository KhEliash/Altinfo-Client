import { Link } from "react-router-dom";

const MyQueries = () => {
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
    </div>
  );
};

export default MyQueries;
