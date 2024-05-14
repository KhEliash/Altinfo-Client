import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <h1 className="text-center mt-12 text-3xl font-bold ">
        Get the latest Alternative Product First
      </h1>
      <div className="max-w-screen-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#A91D3A] rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-3xl font-semibold text-gray-900">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Get the latest news and updates delivered straight to your inbox.
            </p>
            <form className="mt-6">
              <div className="flex items-center">
                <input
                  type="email"
                  className="w-full border bg-gray-200 border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="bg-[#0E46A3] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-300">
              By subscribing, you agree to receive emails from us. We don't
              spam.
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default NewsLetter;
