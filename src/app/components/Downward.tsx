
import { FaCaretDown } from "react-icons/fa";
import { ICategoryData } from "./Marquee";

const Downward = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()
    const upwardData = data.filter((d:ICategoryData)=> d.change.dir === "down")
    return (
        <div>
            <div className="flex justify-start items-center gap-1 mt-15 mb-8">
                           <FaCaretDown className="text-green-500 text-3xl"/> <h2 className="text-2xl font-bold"> আজ দাম কমেছে</h2>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3 ">
              {
                upwardData.map((d:ICategoryData)=>   <div key={d.id} className="card bg-base-100 w-80 shadow-sm">
  <div className="card-body">
  <div className="flex justify-start items-center gap-2">
     <div className="bg-gray-100 p-3 rounded-2xl">
        <p className="text-xl"> {d.image}</p>
   </div>
    <div>
        <h2 className="card-title">
      {d.nameBn}
    </h2>
    <p>প্রতি কেজি</p>
    </div>
  </div>
         <div className="flex justify-between items-center">
         <div>
        <p>
আজকের দাম
</p>
<p className="text-xl font-bold">{d.today} TK</p>
    </div>
   <div className="bg-gray-100 p-1 text-green-500 flex justify-center items-center rounded-2xl">
   <FaCaretDown /><p className=""> {d.change.pct}%</p>
   </div>
  </div>
                </div>
</div>)
              }
            </div>
        </div>
    );
};

export default Downward;