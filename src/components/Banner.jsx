import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="bg-gray-200 p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#151515]">Explore All Queries</h2>
        <Link to={'/queries'}
          className="inline-block px-4 py-2 bg-[#A91D3A] text-white rounded hover:bg-rose-600 hover:scale-105 transition duration-100"
        >
          Take Me There
        </Link>
      </div>
    </div>
  );
};

export default Banner;
