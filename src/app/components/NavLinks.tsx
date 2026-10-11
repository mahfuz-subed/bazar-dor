
import ActiveLinks from './ActiveLinks';

interface ICategories{
    id:string,
    slug:string,
    nameBn: string,
    icon: string
}

const NavLinks = async () => {
    const res = await fetch ("https://openapi.programming-hero.com/api/bazardor/categories");
    const data = await res.json();
    return (
        <div className='flex gap-4 py-3 text-[12px] md:gap-7 text-base'>
            {
                data.map((d:ICategories) => <ActiveLinks key={d.id} href={`/${d.slug}`} title={d.nameBn} icon={d.icon}/>)
            }
        </div>
    );
};

export default NavLinks;
