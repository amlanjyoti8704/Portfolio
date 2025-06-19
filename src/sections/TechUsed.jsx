import React from 'react';
import { logoIconsList } from '../constants';

// Component name must be PascalCase
const LogoIcon = ({ icon }) => {
    return (
        <div className='flex-none space-x-2 border border-[#CCCCFF] shadow-[0_0_30px_5px_#CCCCFF] rounded-2xl w-[180px] h-auto p-2 flex-center marquee-item'>
            <img src={icon.imgPath} alt={icon.name} className='w-8 h-8' />
            <p className='font-bold text-xl text-zinc-300'>{icon.imgname}</p>
        </div>
    );
};

function TechUsed() {
    return (
        <div className='md:my-5 my-10 relative'>
            <div className='gradient-edge' />
            <div className='gradient-edge' />
            <div className='marquee h-52 border-b'>
                <div className='flex items-center justify-center text-center border-t'>
                    {/* <h2 className='text-3xl font-medium border-[#5D3FD3] border-t-transparent rounded-lg rounded-t-none p-2 shadow-[0_0_30px_5px_#5D3FD3]'>TECH USED</h2> */}
                </div>
                <div className='marquee-box md:gap-12 gap-5'>
                    {logoIconsList.map((logo) => (
                        <LogoIcon key={logo.name} icon={logo} />
                    ))}
                    {logoIconsList.map((logo) => (
                        <LogoIcon key={`${logo.name}-duplicate`} icon={logo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechUsed;