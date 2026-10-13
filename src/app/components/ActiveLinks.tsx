"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
interface ICategories{
    href:string,
    title: string,
    icon: string,
    key: string
}
const ActiveLinks = ({href,title,icon}:ICategories) => {
    const pathName = usePathname();
    console.log("path",pathName)
    console.log("href", href)

    return (
        <div>
            <Link href={`/category/${href}`} className= {pathName === `/category${href}` ? "text-green-800 font-bold" : ""}>{icon} {title}</Link>
        </div>
    );
};

export default ActiveLinks;