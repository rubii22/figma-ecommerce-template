import Image from "next/image"

function Music(){
 return (
 // {/* container */}
 <div className="w-full flex justify-center items-center mt-10 mb-1 ">
 {/* box */}
 <div className="sm:-end-full md:w-[80%] sm:p-5 md:pl-5 bg-gray-950 sm:h-[100%] md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center">
 {/* left box */}
 <div className="sm:w-[100%] md:w-[50%]">
 <h3 className="text-green-500 font-bold ">Categories</h3>
 <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-5xl pt-4">Enhance Your Music Experience</h1>
 {/* timer */}
 <div className='flex pt-5 pb-4 gap-x-4'>
 <div className='bg-gray-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
 <span className='font-bold text-lg'>23</span>
 <span className='sm:text-xs md:text-sm'>Hours</span>
 </div>
 <div className='bg-gray-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
 <span className='font-bold text-lg'>05</span>
 <span className='sm:text-xs md:text-sm'>Days</span>
 </div>
 <div className='bg-gray-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
 <span className='font-bold text-lg'>59</span>
 <span className='sm:text-xs md:text-sm'>Minutes</span>
 </div>
 <div className='bg-gray-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center'>
 <span className='font-bold text-lg'>35</span>
 <span className='sm:text-xs md:text-sm'>Seconds</span>
 </div>
 </div>
 <button className='bg-green-500 hover:bg-green-600 sm:hidden md:block sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3 '>Buy Now!</button>

 </div>
 {/* right box */}
 <div className=' sm:w-[80%] md:[40%] lg:w-[40%] pl-6 '>
 <Image src={"/Music.png"} 
 width={500}
 height={500}
 alt='images'></Image>
 <button className='bg-green-500 hover:bg-green-600 sm:block md:hidden sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3 '>Buy Now!</button>

 </div>


 </div>
 </div>




 )
}
export default Music;