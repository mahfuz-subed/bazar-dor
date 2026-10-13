import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { ICategoryData } from "../components/Marquee";
import Link from "next/link";

const AllProducts = async () => {
      const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()
      const units:Record <string,string> = {
      kg: "কেজি",
      litre: "লিটার" ,
      dozen: "ডজন",
      piece: "পিস",
    }

    const toBengaliUnits = ((u:string) => units[u?.toLowerCase()] || u)
    
    const toBengaliPrice = ((price: number|string) =>{ const num = Number(price)
         {return new Intl.NumberFormat("bn-BD").format(num)} })
    return (
      <Link href="/productDetails/">
           <div id="সব-পণ্য">
                    <div className="grid justify-start items-center gap-1 mt-15 mb-8">
                                   <h2 className="text-2xl font-bold"> সব পণ্য</h2>
                                   <p className="text-gray-400">মোট {toBengaliPrice(data.length)}টি পণ্য দেখানো হচ্ছে</p>
                    </div>
                    <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3 ">
                      {
                        data.map((d:ICategoryData)=>   <div key={d.id} className="card bg-base-100 w-80 shadow-sm">
          <div className="card-body">
          <div className="flex justify-start items-center gap-2">
             <div className="bg-gray-100 p-3 rounded-2xl">
                <p className="text-xl"> {d.image}</p>
           </div>
            <div>
                <h2 className="card-title">
              {d.nameBn}
            </h2>
            <p>প্রতি {toBengaliUnits(d.unit)}</p>
            </div>
          </div>
                 <div className="flex justify-between items-center">
                 <div>
                <p>
        আজকের দাম
        </p>
        <p className="text-xl font-bold">{toBengaliPrice(d.today)} টাকা</p>
            </div>
          { 
            d.change.dir === "flat"? toBengaliPrice(d.change.pct)+"%": d.change.dir === "down"?  <div className="bg-gray-100 p-1 text-green-500 flex justify-center items-center rounded-2xl">
           <FaCaretDown /><p className=""> {toBengaliPrice(d.change.pct)}%</p>
           </div> : d.change.dir === "up"? <div className="bg-gray-100 p-1 text-red-500 flex justify-center items-center rounded-2xl">
    <FaCaretUp/><p className=""> {toBengaliPrice(d.change.pct)}%</p>
   </div> : ""
          }
          </div>
                        </div>
        </div>)
                      }
                    </div>
                </div>
      </Link> 
    );
};

export default AllProducts;