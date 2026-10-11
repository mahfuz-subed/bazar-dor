import { connection } from "next/server";
const LocalDate = async () => {
    await connection();
    const date = new Date().toLocaleDateString("bn-BD",{dateStyle:"full"})
   
    return <p className="text-[10px] text-gray-500 md:text-[12px]">{date}</p>
};

export default LocalDate;