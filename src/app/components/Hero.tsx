import Image from "next/image"
function Hero(){
 return(
 <div className="w-full flex justify-center items-center">
 <div className="sm:w-full md:w-full lg:w-[80%] flex ">
 {/* left side */}
 <div className='border-r-2 border-neutral-100 p-10 sm:hidden md:block pb-0 '>
 <ul>
 <li className='leading-loose hover:underline cursor-pointer'>Woman&apos;s Fashion</li>
 <li className='leading-loose hover:underline cursor-pointer'>Men&apos;s Fashion </li>
 <li className='leading-loose hover:underline cursor-pointer'>Electronics</li>
 <li className='leading-loose hover:underline cursor-pointer'>Home & Lifestyle</li>
 <li className='leading-loose hover:underline cursor-pointer'>Medicine</li>
 <li className='leading-loose hover:underline cursor-pointer'>Sports & Outdoor</li>
 <li className='leading-loose hover:underline cursor-pointer'>Baby&apos;s & Toys</li>
 <li className='leading-loose hover:underline cursor-pointer'>Groceries & Pets</li>
 <li className='leading-loose hover:underline cursor-pointer'>Health & Beauty</li>

 </ul>
 </div>
 <div className="mt-8 ml-10">
 <Image 
 src={"/Frame 560.png"}
 alt="Phone"
 width={892}
 height={344}/>
 </div>

 </div>
 </div>
 
 )
}
export default Hero;