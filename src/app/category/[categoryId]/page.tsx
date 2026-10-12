import { ICategoryData } from "@/app/components/Marquee";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const CategoryPage = async ({params}: {
  params: Promise<{ categoryId: string }>
}) => {
    const {categoryId} = await params;
  
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()
    const filteredData = data.filter((fd:ICategoryData)=> fd.category === categoryId)
        console.log(filteredData)
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
        <div className="w-[80%] mx-auto">
            <div className="flex justify-start items-center p-4 shadow-sm my-8  rounded-3xl">
    
                 <div className=" p-3 rounded-2xl">
                             <p className="text-4xl"> {filteredData[0].categoryIcon}</p>
                        </div>
                <div>
                    <h2 className="font-bold text-2xl">{filteredData[0].categoryNameBn}</h2>
                <p>{toBengaliPrice(filteredData.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3 ">
            {
             filteredData.map((d:ICategoryData)=> <div key={d.id} className="card bg-base-100 w-80 shadow-sm">
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
                     </div>)
            }
        </div>
        </div>
    );
};

export default CategoryPage;