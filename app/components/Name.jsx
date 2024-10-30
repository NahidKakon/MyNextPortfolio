import React from 'react'
import Image from 'next/image';

function Name() {
  return (
    <div>
         <Image
          
          src="/name.svg"
          alt="logo"
          className="transition-transform duration-300 cursor-pointer hover:-rotate-6"
          width={200}
          height={150}
        
        />
      
    </div>
  )
}
export default Name;
