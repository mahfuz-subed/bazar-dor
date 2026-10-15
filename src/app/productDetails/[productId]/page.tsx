import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { ICategoryData } from "@/app/components/Marquee";

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();

  const filteredProductData = data.filter(
    (d: ICategoryData) => d.id.toString() === productId,
  );

  const markets = filteredProductData[0].markets;
  const units: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  const toBengaliUnits = (u: string) => units[u?.toLowerCase()] || u;

  const toBengaliPrice = (price: number | string) => {
    const num = Number(price);
    {
      return new Intl.NumberFormat("bn-BD").format(num);
    }
  };

  const minPrices = markets.map((min: IMarket) => min.min);
  const minPrice = Math.min(...minPrices);

  const maxPrices = markets.map((max: IMarket) => max.max);
  const maxPrice = Math.max(...maxPrices);
  const totalPrice = markets.reduce((acc: number, market: IMarket) => {
    return acc + market.min + market.max;
  }, 0);
  const avgPrice = totalPrice / (markets.length * 2);

  return (
    <div className="w-[80%] mx-auto my-6">
      <div>
        {filteredProductData.map((d: ICategoryData) => (
          <div key={d.id} className="card bg-base-100 w-full shadow-sm">
            <div className="card-body">
              <div className="flex justify-between items-center gap-2">
                <div className="flex justify-start items-center gap-2">
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <p className="text-2xl"> {d.image}</p>
                  </div>
                  <div className="space-y-1">
                    <h2 className="card-title">{d.nameBn}</h2>
                    <p className="text-gray-500">প্রতি {d.categoryNameBn}</p>
                    {d.change.dir === "up" ? (
                      <p className="text-gray-600">
                        গতকালের তুলনায় আজ দাম{" "}
                        <span className="font-bold ">বেড়েছে</span> ·{" "}
                        {toBengaliPrice(d.today - d.yesterday)} টাকা
                      </p>
                    ) : (
                      <p className="text-gray-600">
                        গতকালের তুলনায় আজ দাম{" "}
                        <span className="font-bold">কমেছে</span> ·{" "}
                        {toBengaliPrice(d.yesterday - d.today)} টাকা
                      </p>
                    )}
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-2xl grid justify-items-center text-center">
                  <div>
                    <p>আজকের দাম</p>

                    <p className="text-xl font-bold">
                      {toBengaliPrice(d.today)}{" "}
                    </p>
                    <p>টাকা / {toBengaliUnits(d.unit)}</p>
                  </div>
                  {d.change.dir === "flat" ? (
                    toBengaliPrice(d.change.pct) + "%"
                  ) : d.change.dir === "down" ? (
                    <div className=" text-green-500 flex justify-center items-center">
                      <FaCaretDown />
                      <p className=""> {toBengaliPrice(d.change.pct)}%</p>
                    </div>
                  ) : d.change.dir === "up" ? (
                    <div className="text-red-500 flex justify-center items-center">
                      <FaCaretUp />
                      <p className=""> {toBengaliPrice(d.change.pct)}%</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="grid grid-cols-3 gap-3 my-6 ">
          <div className="p-5 shadow-sm rounded-2xl text-[12px] text-gray-700 space-y-1 md:text-sm">
            <p>সর্বনিম্ন দাম</p>
            <h3 className="font-bold text-green-400 text-xl">
              {toBengaliPrice(minPrice)} টাকা
            </h3>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="p-5 shadow-sm rounded-2xl text-[12px] text-gray-700 space-y-1 md:text-sm">
            <p>সর্বাধিক দাম</p>
            <h3 className="font-bold text-red-400 text-xl">
              {toBengaliPrice(maxPrice)}
            </h3>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="p-5 shadow-sm rounded-2xl text-[12px] text-gray-700 space-y-1 md:text-sm">
            <p>গড় দাম</p>
            <h3 className="font-bold text-green-400 text-xl">
              {toBengaliPrice(Math.round(avgPrice))}
            </h3>
            <p>সব বাজারের গড়</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mt-8 mb-4">
            বাজারভিত্তিক আজকের দাম
          </h4>

          <div className="shadow-sm rounded-2xl">
            <div className="overflow-x-auto">
              <table className="table table-zebra text-gray-800 ">
                {/* head */}
                <thead>
                  <tr className="py-2">
                    <th>বাজার</th>
                    <th>বিভাগ</th>
                    <th>সর্বনিম্ন</th>
                    <th>সর্বাধিক</th>
                    <th>গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {markets.map((md: IMarket, ind: number) => (
                    <tr key={ind}>
                      <td className="border-b-1 border-gray-900">
                        {md.market}
                      </td>
                      <td className="border-b-1 border-gray-900">
                        {md.division}
                      </td>
                      <td className="border-b-1 border-gray-900">
                        {toBengaliPrice(md.min)} টাকা
                      </td>
                      <td className="border-b-1 border-gray-900">
                        {toBengaliPrice(md.max)} টাকা
                      </td>
                      <td className="border-b-1 border-gray-900 font-bold">
                        {toBengaliPrice(Math.round((md.min + md.max) / 2))} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
