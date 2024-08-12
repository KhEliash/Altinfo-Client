import { useLoaderData } from "react-router-dom";

const AlUsers = () => {
  const queries = useLoaderData();
  // console.log(queries);
  return (
    <div>
      <h1 className="text-center my-12 text-2xl font-bold text-rose-600">
        All Users Who add Queries
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>User Name</th>
              <th>User Photo</th>
              <th>User Email</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((c, index) => (
              <tr key={c._id}>
                <th>{index + 1}</th>
                <td> {c.userInfo.userName}</td>
                <td>
                  <img
                    src={c.userInfo.userImage}
                    alt="img"
                    className="w-12 h-12"
                  />
                </td>
                <td>{c.userInfo.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlUsers;
