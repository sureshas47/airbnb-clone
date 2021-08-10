import React from "react";
import Image from "next/image";
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid 
        grid-cols-3 bg-white shadow-md p-5 md:px-20"
    >
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className=' flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
          <input  className=' text-gray-500 placeholder-gray-400 pl-2 bg-transparent outline-none flex-grow' 
          type="text" placeholder='Start your search'/>
          {/* when screen goes md:768 searchicon will be displayed with this==> hidden md:inline-flex */}
          <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full 
          p-2 cursor-pointer md:mx-2'
          />
         
      </div>
      {/* rught */}
      <div className='flex text-gray-500 space-x-4 items-center justify-end'>
          <p className='text-md hidden md:inline cursor-pointer'>Become a host</p>
          <GlobeAltIcon className='h-6 cursor-pointer'/>
          <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
            <MenuIcon className='h-6 cursor-pointer'/>
            <UserCircleIcon className='h-6'/>
          </div>
      </div>
    </header>
  );
}

export default Header;
