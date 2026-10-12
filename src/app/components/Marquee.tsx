import MarqueeText from "react-marquee-text"
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";



export interface ICategoryData{    
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string,
    unit: string,
    image: string,
    today: number,
    yesterday: number,
    lastWeek: number,
    lastMonth: number,
   change: {
    dir: "up" | "down" | "flat";
    pct: number;
  }
}


const Marqueee = async () => {
    
      const res = await fetch ("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json();

    const toBengaliPrice = ((price: number|string) =>{ const num = Number(price)
         {return new Intl.NumberFormat("bn-BD").format(num)} })

    
    const units:Record <string,string> = {
      kg: "কেজি",
      litre: "লিটার" ,
      dozen: "ডজন",
      piece: "পিস",
    }

    const toBengaliUnits = ((u:string) => units[u?.toLowerCase()] || u)
  
    return (
        <div className="flex gap-4 box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.15); ">
             <MarqueeText duration={10} direction="right" className="flex gap-6">
            {
                data.map((d:ICategoryData)=> <div key={d.id} className="flex justify-center items-center  gap-1 text-sm"> {d.image} {d.nameBn} <span className="font-bold">{toBengaliPrice(d.today)} টাকা/{toBengaliUnits(d.unit)}</span> 
                { d.change.dir === "flat"? toBengaliPrice(d.change.pct)+"%": d.change.dir === "up"? <span className="flex justify-center items-center text-red-500"><FaCaretUp/>{toBengaliPrice(d.change.pct)}% </span>: d.change.dir === "down"? <span className = "flex justify-center items-center text-green-500" ><FaCaretDown /> {toBengaliPrice(d.change.pct)}% </span>: "" }</div>)
            }
    </MarqueeText>
        </div>
    );
};

export default Marqueee;