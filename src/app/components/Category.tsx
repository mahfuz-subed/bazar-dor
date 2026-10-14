import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { ICategoryData } from "./Marquee";
import Link from "next/link";

interface ISortedProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}


const Category = ({sortedFilteredData}:{sortedFilteredData:ISortedProduct[]}) => {
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
        <div>
            <p className="my-2 text-gray-500">মোট {toBengaliPrice(sortedFilteredData.length)}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3 ">
            {
             sortedFilteredData.map((d:ICategoryData)=> <Link href={`/productDetails/${d.id}`} key={d.id} className="card bg-base-100 w-80 shadow-sm">
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
                     <p className="text-xl font-bold">{toBengaliPrice(d.today)} TK</p>
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
                     </Link>)
            }
        </div>
        </div>
    );
};

export default Category;