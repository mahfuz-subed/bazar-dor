import { FaCaretUp } from "react-icons/fa";
import { ICategoryData } from "./Marquee";


const Upward = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()
    const upwardData = data.filter((d:ICategoryData)=> d.change.dir === "up").sort((a:ICategoryData, b:ICategoryData)=> b.change.pct - a.change.pct)
    

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
            <div className="flex justify-start items-center gap-1 mt-15 mb-8">
                           <FaCaretUp className="text-red-500 text-3xl"/> <h2 className="text-2xl font-bold"> আজ দাম বেড়েছে</h2>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3 ">
              {
                upwardData.slice(0,6).map((d:ICategoryData)=>   <div key={d.id} className="card bg-base-100 w-80 shadow-sm">
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
   <div className="bg-gray-100 p-1 text-red-500 flex justify-center items-center rounded-2xl">
    <FaCaretUp/><p className=""> {d.change.dir === "flat"? toBengaliPrice(d.change.pct)+"%": toBengaliPrice(d.change.pct)+"%" }</p>
   </div>
  </div>
                </div>
</div>)
              }
            </div>
        </div>
    );
};

export default Upward;