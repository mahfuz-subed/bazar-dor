import { ICategoryData } from "@/app/components/Marquee";
import Sorting from "@/app/components/Sorting";


const CategoryPage = async ({params}: {
  params: Promise<{ categoryId: string }>
}) => {
    const {categoryId} = await params;
  
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()
    const filteredData = data.filter((fd:ICategoryData)=> fd.category === categoryId)

    
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
            <div >
                <Sorting filteredData ={filteredData}/>
            </div>
    
        </div>
    );
};

export default CategoryPage;