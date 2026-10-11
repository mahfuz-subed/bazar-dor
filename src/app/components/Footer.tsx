import React from 'react';

const Footer = () => {
    return (
       <div>
         <div className='grid justify-items-center gap-2 py-6 px-[5%] mt-6 border-t-1 border-gray-300 md:grid-cols-2 justify-between items-center '>
            <p className='text-sm  text-gray-500 text-center md:text-base'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
            <p  className='text-sm  text-gray-500 text-center md:text-base '>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
        </div>
       </div>
    );
};

export default Footer;