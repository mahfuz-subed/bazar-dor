import { connection } from "next/server";
const LocalDate = async () => {
    await connection();
    const date = new Date().toLocaleDateString("bn-BD",{dateStyle:"full"})
   
    return <p className="text-[12px] text-gray-500">{date}</p>
};

export default LocalDate;