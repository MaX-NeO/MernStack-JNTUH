import React from 'react'

const TwClasses = () => {
    //h-96          : predefined height (24rem)
    //h-screen      : height :100vh
    //h-[40px]      : height :40px
    //h-[40rem]     : height :40rem
    //h-[40vh]      : height :40vh
    //h-[40%]       : height :40%
    //h-full        : height :100%

    //flex              : display:flex
    //flex-row          : flex-direction : row
    //flex-col          : flex-direction : col
    //justify-center    : justify-content: center
    //justify-start     : justify-content: flex-start
    //items-center      : align-items: center
    //gap-2             : gap :0.25rem       

    return (
        <>


            <div className="h-96 w-screen flex flex-row gap-20 justify-center items-center text-pink-600 text-3xl font-bold">
                <div className='rounded-md p-10 border border-pink-50 hover:shadow-lg hover:shadow-pink-500 hover:bg-pink-100/20'>
                    Hello
                </div>
                <div>
                    Hello
                </div>
            </div>
        </>
    )
}

export default TwClasses