import { useLoaderData } from "react-router-dom";

const AlUsers = () => {
  const queries = useLoaderData();
  // console.log(queries);
  return (
    <div className="bg-base">
      <h1 className="text-center my-12 text-2xl font-bold text-rose-600">
        All Users Who add Queries
      </h1>

      <div className="overflow-x-auto my-12">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg border border-gray-200">
          {/* Table Head */}
          <thead className="bg-rose-700 text-white">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">No</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                User Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                User Photo
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                User Email
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
                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {c.userInfo.userName}
                </td>
                <td className="px-4 py-3">
                  <img
                    src={c.userInfo.userImage}
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {c.userInfo.userEmail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlUsers;
