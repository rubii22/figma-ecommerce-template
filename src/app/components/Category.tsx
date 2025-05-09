import { FaMobileAlt, FaDesktop, FaStopwatch, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa'; // Import icons

function Category() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      {/* container */}
      <div className="sm:w-full md:w-[80%] border-b-2 border-neutral-100 pb-10">
        {/* container boxes */}
        <div className="flex flex-col sm:pl-[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">Categories</h3>
          <div className="flex">
            <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Browse By Category</h1>
          </div>
        </div>

        {/* Category Boxes */}
        <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap">
          {/* Box 1 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaMobileAlt className="text-3xl group-hover:text-white" /> {/* Icon */}
            <p className="group-hover:text-white">Phones</p>
          </div>

          {/* Box 2 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaDesktop className="text-3xl group-hover:text-white" /> {/* Icon */}
            <p className="group-hover:text-white">Computers</p>
          </div>

          {/* Box 3 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaStopwatch className="text-3xl group-hover:text-white" /> {/* Icon */}
            <p className="group-hover:text-white">SmartWatch</p>
          </div>

          {/* Box 4 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaCamera className="text-3xl group-hover:text-white" /> {/* Icon */}
            <p className="group-hover:text-white">Camera</p>
          </div>

          {/* Box 5 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaHeadphones className="text-3xl group-hover:text-white" /> {/* Icon */}
            <p className="group-hover:text-white">Headphones</p>
          </div>

          {/* Box 6 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaGamepad className="text-3xl group-hover:text-white" /> {/* Icon */}
            <p className="group-hover:text-white">Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
