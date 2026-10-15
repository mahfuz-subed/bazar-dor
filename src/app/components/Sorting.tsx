"use client";
import { useState } from "react";
import Category from "./Category";
import { FaChevronDown } from "react-icons/fa";

interface IProduct {
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

const Sorting = ({ filteredData }: { filteredData: IProduct[] }) => {
  console.log("from sorting", filteredData);
  const [sort, setSort] = useState<"low" | "high" | "default">("default");

  const sortProducts = (data: IProduct[]) => {
    const sortedData = [...data];
    if (sort === "low") {
      sortedData.sort((a, b) => a.today - b.today);
    }
    if (sort === "high") {
      sortedData.sort((a, b) => b.today - a.today);
    }
    return sortedData;
  };

  const sortedFilteredData = sortProducts(filteredData);

  return (
    <div>
      <div className="p-3 rounded-2xl shadow-sm flex justify-end items-center gap-3 mb-6">
        <p className="font-bold text-gray-500">সাজান: </p>
        <div>
          <fieldset className="fieldset">
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value as "low" | "high" | "default")
              }
              className="select font-bold"
            >
              <option value="default">
                ডিফল্ট <FaChevronDown />
              </option>
              <option value="low">দাম: কম থেকে বেশি</option>
              <option value="high"> দাম: বেশি থেকে কম</option>
            </select>
          </fieldset>
        </div>
      </div>
      <Category sortedFilteredData={sortedFilteredData} />
    </div>
  );
};

export default Sorting;
