import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

 

const MyRecommendation = () => {
    const {user}= useContext(AuthContext);
      // all recom
  useEffect(() => {
    fetch(` http://localhost:5000/myrecom?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setQueries(data);
      });
  }, [user]);


    return (
        <div>
            my
        </div>
    );
};

export default MyRecommendation;