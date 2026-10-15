import React from 'react';

import Link from 'next/link';

const UserInfo = () => {
    return (
        <div>

    <Link href="/sign-in" className="btn bg-white text-green-400 text-[12px] md:text-base hover:bg-green-400 hover:text-white ">সাইন ইন</Link>
    <Link href="/sign-in" className="btn  text-[12px] md:text-base bg-green-400 text-white hover:bg-white hover:text-green-400">সাইন আপ</Link>
  </div>
   
    );
};

export default UserInfo;