import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import regimg from "../../assets/images/regis.avif";

import logo from "../../assets/images/altinfo.png";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,photo,email,password);
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Good job!",
          text: "You Successfully Loged in!",
          icon: "success",
        });
      })
      .catch((error) => {
        // console.log(error.message);
        Swal.fire({
          title: "Oops!",
          text: `${error.message}`,
          icon: "error",
        });
      });
    updateUserProfile(name, photo);
  };
  return (
    <div className="py-5 px-2 flex items-center justify-center  min-h-screen">
      <div className="flex  w-full  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div className="hidden bg-cover  lg:w-1/2 lg:flex items-center justify-center">
          <img src={regimg} alt="" className="w-full " />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img src={logo} alt="" className="  w-32 rounded-xl" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome !
          </p>

          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="name"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Photo
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="photo"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-800 rounded-lg hover:bg-rose-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to={"/login"}
              href="#"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
