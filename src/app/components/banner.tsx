import Link from "next/link";
import Image from "next/image";
const Banner = () => {
    return (
        <div className="my-6 border-1 border-gray-300 rounded-2xl p-6 text-center md:flex justify-between items-center text-base "> 
            <div className=" space-y-8">
                <p className="block bg-green-100 text-sm text-green-600 w-[80%] mx-auto  py-1 my-4 rounded-4xl xl:text-md">মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
                <h1 className="text-2xl font-bold xl:text-3xl">
                        আজকের বাজারের দাম এক নজরে
                </h1 >
                <p className="text-gray-500 text-sm xl:text-md">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত।</p>
                <Link href=""><button className="btn bg-green-600 text-white xl:text-md">সব পণ্য দেখুন</button></Link>
            </div>
            <div className="flex justify-center">
                <Image src="/bazar-hero.png" alt="banner photo" width={400} height={400} className="block"/>
            </div>
        </div>
    );
};

export default Banner;