
import Image from "next/image";
import Link from "next/link";
import LocalDate from "./date";
import { Suspense } from "react";
import NavLinks from "./NavLinks";


const Nav = () => {
  
    return (
        <div >
            <div className="navbar bg-base-100 shadow-sm ">
  <div className="w-[80%] mx-auto flex justify-between items-center">
    <div className="navbar-start gap-3">
        <div className="p-3 rounded-2xl bg-green-800"><Link href="/" className=""><Image src="/logo-icon.png" alt="logo" width={20} height={20}/></Link></div>
    <div>
        <Link href="/" className="btn btn-ghost text-md md:text-xl">বাজার দর</Link>
    <Suspense fallback={<p>loading...</p>}>
         <LocalDate/>
    </Suspense>
   
    </div>
  </div>
 
  <div className="navbar-end gap-2">
    <Link href="" className="btn bg-white text-green-700 text-[12px] md:text-base ">সাইন ইন</Link>
    <Link href="" className="btn  text-[12px] md:text-base bg-green-800 text-white">সাইন আপ</Link>
  </div>
  </div>
  
</div>
        <div className="w-[80%] mx-auto py-2">
            <NavLinks/>
        </div>
        </div>
    );
};

export default Nav;