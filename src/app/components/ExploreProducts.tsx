/* eslint-disable @typescript-eslint/no-unused-vars */ 

import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import Image from "next/image"

function ExploreProducts(){
    return (
        <main>
        <div id='products' className="w-full flex justify-center items-center mt-10 mb-1 ">
        {/* container */}
        <div className="w-[80%]">
        {/* container boxes */}
        <div className="flex flex-col">
        <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">Our Products</h3>
        <div className="flex ">
        <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Explore Our Products</h1> </div>
        </div>
        <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
        {/* box1 */}
        <div className='pt-4'>
        <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
        {/* Image */}
        <Image
        src={"/breed.png"}
        width={100}
        height={100}
        alt="game-images"
        />
        <span className='absolute top-1 right-1 text-red rounded-full'> <IoHeartOutline className='text-xl ' /></span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
        </button>
        </div>
       
        <h1 className="font-bold font-sans pt-2 ">Breed Dry Dog Food</h1>
        <span className="text-red-500 font-bold">$100</span> 
       
       
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(88)</span>
       
       
        </div>
        {/* box2 */}
        <div className='pt-4'>
        <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
        {/* Image */}
        <Image
        src={"/camera.png"}
        width={150}
        height={100}
        alt="game-images"
        />
        <span className='absolute top-1 right-1 text-red rounded-full'> {/*<FontAwesomeIcon icon={faHeart} className='text-xl ' />*/}</span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
        </button>
        </div>
        <h1 className="font-bold font-sans pt-2 ">CANON EOS DSLR Camera</h1>
        <span className="text-red-500 font-bold">$360</span> 
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(95)</span>
       
       
        </div>
        {/* box 3 */}
        <div className='pt-4'>
        <div className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
        <Image src={"/laptop.png"}
        width={150} height={100} 
        alt="game-images">
        </Image>
        <span className='absolute top-1 right-1 text-red rounded-full'> {/*<FontAwesomeIcon icon={faHeart} className='text-xl ' />*/}</span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
        </button>
        </div>
        <h1 className="font-bold font-sans pt-2">ASUS FHD Gaming Laptop</h1>
        <span className="text-red-500 font-bold">$700</span>
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar
       
       <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(325)</span>
       
        </div>
        {/* box4 */}
        <div className='pt-4'>
        <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
        <Image src={"/cream.png"}
        width={150} height={100} 
        alt="game-images">
        </Image>
        <span className='absolute top-1 right-1 text-red rounded-full'> {/*<FontAwesomeIcon icon={faHeart} className='text-xl ' />*/}</span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
        </button>
        </div>
        <h1 className="font-bold font-sans pt-2">Curology Product Set </h1>
        <span className="text-red-500 font-bold">$1500</span>
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(3145)</span>
        </div>
        {/* other boxes */}
       
        {/* box complete */}
       
        </div>
        <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
        {/* box1 */}
        <div className='pt-4'>
        <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
        {/* Image */}
        <Image
        src={"/car.png"}
        width={150}
        height={100}
        alt="game-images"
        />
        <span className='bg-green-500 px-2 rounded-md text-white absolute top-2 left-2'>New</span>
        <span className='absolute top-1 right-1 text-red rounded-full'> {/*<FontAwesomeIcon icon={faHeart} className='text-xl ' />*/}</span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
        </button>
        </div>
       
        <h1 className="font-bold font-sans pt-2 ">Kids Electric Car</h1>
        <span className="text-red-500 font-bold">$960</span> 
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(65)</span>
       
        </div>
        {/* box2 */}
        <div className='pt-4'>
        <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
        {/* Image */}
        <Image
        src={"/shoes.png"}
        width={150}
        height={100}
        alt="game-images"
        />
        <span className='absolute top-1 right-1 text-red rounded-full'> {/*<FontAwesomeIcon icon={faHeart} className='text-xl ' />*/}</span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
        </button>
        </div>
        <h1 className="font-bold font-sans pt-2 ">Jr. Zoom Soccer Cleats</h1>
        <span className="text-red-500 font-bold">$1160</span>
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(25)</span>
        </div>
        {/* box 3 */}
        <div className='pt-4'>
        <div className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
        <Image src={"/game.png"}
        width={150} height={100} 
        alt="game-images">
        </Image>
        <span className='bg-green-500 px-2 rounded-md text-white absolute top-2 left-2'>New</span>
        <span className='absolute top-1 right-1 text-red rounded-full'> {/*<FontAwesomeIcon icon={faHeart} className='text-xl ' />*/}</span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       
       
       
       
       
       Add to Cart
        </button>
        </div>
        <h1 className="font-bold font-sans pt-2">GP11 Shooter USB Gamepad</h1>
        <span className="text-red-500 font-bold">$600</span> 
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(55)</span>
        </div>
        {/* box4 */}
        <div className='pt-4'>
        <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
        <Image src={"/jacket.png"}
        width={150} height={100} 
        alt="game-images">
        </Image>
        <span className='absolute top-1 right-1 text-red rounded-full'> {/*<FontAwesomeIcon icon={faHeart} className='text-xl ' />*/}</span>
       
        {/* Add to Cart */}
        <button className=" w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
        </button>
        </div>
        <h1 className="font-bold font-sans pt-2">Quilted Satin Jacket </h1>
        <span className="text-red-500 font-bold">$600</span> 
        
        {/*<FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
        <FontAwesomeIcon icon={regularStar} />*/} {/* Empty star */}
        <span className='text-gray-400'>(55)</span>
        </div>
       
        {/* box complete */}
       
        </div>
       
        </div>
        </div>
        <div className='w-full flex justify-center items-center'>
        <div className='w-[80%] flex justify-center border-b-2 border-neutral-100 pb-10 pt-6'>
        <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm '>View All Products</button>
        </div>
        </div>
       
        </main>
        )
       }
       export default ExploreProducts
