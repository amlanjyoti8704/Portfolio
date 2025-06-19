import React from 'react'

function Title({title, sub, className}) {
    return (
        <div className='flex flex-col items-center gap-5'>
            <div className='font-semibold text-center md:text-5xl text-3xl'>
                <h1 className={`${className ? className : 'text-5xl md:text-6xl text-white font-bold text-center'}`}> 
                    {title}
                </h1>
            </div>
            {/* <div className='hero-badge'>
                <p>{sub}</p>
            </div> */}
        </div>
    )
}

export default Title
