import React from "react";

const NewsLetter = () => {
  return (
    <div className="py-16 ">
      <h1 className="text-center mt-12 text-3xl font-bold ">
        Get the latest Alternative Product First
      </h1>
      <div className="max-w-3xl mx-auto bg-[#C73659] dark:bg-base-300 rounded-lg shadow-2xl overflow-hidden mt-8">
        <div className="p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-white dark:text-gray-100">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-gray-100 dark:text-gray-400">
            Get the latest news, updates, and alternative products delivered
            straight to your inbox.
          </p>
          <form className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                className="flex-1 border bg-white dark:bg-gray-700 dark:border-gray-600 border-gray-300 rounded-md px-4 py-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0E46A3] dark:bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-6 text-xs text-gray-200 dark:text-gray-500">
            By subscribing, you agree to receive emails from us. No spam, just
            the updates you care about.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
