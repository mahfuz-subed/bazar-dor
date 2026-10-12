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

    return (
        <div>
            <Link href={`/category/${href}`} className={pathName === href ? "text-green-800 font-bold" :""}>{icon} {title}</Link>
        </div>
    );
};

export default ActiveLinks;