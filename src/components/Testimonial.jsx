const Testimonial = () => {
  return (
    <div className="py-12 ">
      <div className="container mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold sm:text-4xl   text-center text-gray-800 mb-8">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                " Using [Your Product Name] has been a game-changer for our
                business. It's streamlined our workflow and saved us countless
                hours. Highly impressed with the level of support and the
                results we've achieved. Thank you!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/vkBmK3J/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg
                "
                  alt="Customer 1"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    John Doe
                  </h3>
                  <p className="text-gray-600">CEO, Company ABC</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                "I've tried numerous products in the past, but none have come
                close to the quality and performance of [Your Product Name].
                It's intuitive to use, and the results speak for themselves.
                Definitely a must-have for anyone in the industry"
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/2d6RLTD/fg.jpg"
                  alt="Customer 2"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">
                    Marketing Manager, Company XYZ
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                "As a busy professional, I rely on products that deliver on
                their promises. [Your Product Name] not only met but exceeded my
                expectations. It's become an indispensable tool in my daily
                routine, and I can't imagine working without it. Highly
                recommended!"
              </p>
              <div className="flex items-center">
                <img
                  src="  https://i.ibb.co/s2Wkr2f/jonas-kakaroto-mj-Rwhvq-EC0-U-unsplash.jpg"
                  alt="Customer 3"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Alex Johnson
                  </h3>
                  <p className="text-gray-600">CTO, Company QRS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
