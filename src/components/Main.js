import React from 'react'
import Web from '../assets/images/image-web-3-mobile.jpg'
import Retro from '../assets/images/image-retro-pcs.jpg'
import Top from '../assets/images/image-top-laptops.jpg'
import Gaming from "../assets/images/image-gaming-growth.jpg"

function Main() {
    return (
        <>
            <div className='md:flex flex-col'>
                <div className='md:flex flex-row mb-5'>
                    <div className='ml-8 mr-8 '>

                        <div className='mt-3 mb-3 '>
                            <img className='h-96 w-full object-fit' src={Web} alt="/" />
                        </div>
                        <div className='mt-3 mb-3 md:flex flex-row '>
                            <div >
                                <h1 className='font-bold text-3xl md:font-extrebold md:text-6xl'>The Bright Future of Web 3.0?</h1>
                            </div>
                            <div className='md:flex flex-col   md:ml-40'>
                                <p>
                                    We dive into the next evolution of the web that claims to put the
                                    power of the platforms back into the hands of the people. But is it
                                    really fulfilling its promise?
                                </p>
                                <div className='flex  justify-start mt-3 mb-3 '>
                                    <button className='hover:text-gray-300 md:tracking-widest md:w-52'>Read more</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="deep mt-3 mb-3 text-white ml-8 mr-8 ">
                        <h2 className='text-orange-400 mx-6'>New</h2>

                        <div className='mt-3 mb-3'>
                            <p className='mx-6 mt-3 mb-3 text-xl font-bold'>Hydrogen VS Electric Cars</p>
                            <p className='mx-6 mt-3 mb-3 text-sm text-gray-300'>Will  hydrogen-fueled cars ever catch up to EVs?</p>

                        </div>
                        <div className=' bg-gray-400/50 h-px mx-2 mt-1 mb-1'></div>
                        <div className='mt-3 mb-3'>
                            <p className='mx-6 mt-3 mb-3 text-xl font-bold'>The Downsides of AI Artistry</p>
                            <p className='mx-6 mt-3 mb-3 text-sm text-gray-300'>
                                What are the possible adverse effects of on-demand AI image
                                generation?
                            </p>
                        </div>
                        <div className=' bg-gray-400/50 h-px mx-2 mt-1 mb-1'></div>
                        <div className='mt-3 mb-3 pb-5'>
                            <p className='mx-6 mt-3 mb-3 text-xl font-bold'>Is VC Funding Drying Up?</p>
                            <p className='mx-6 mt-3 mb-3 text-sm text-gray-300'>
                                Private funding by VC firms is down 50% YOY. We take a look at what
                                that means.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='ml-8 mr-8 mt-5 mb-5'>
                    <div class=" flex flex-col md:flex-row">
                        <div class=" flex flex-row mt-3 mb-3 ">
                            <img className='w-40 h-40' src={Retro} alt="/" />
                            <div className='ml-4 mr-4 '>
                                <p className='text-2xl text-gray-400'>01</p>
                                <p className='text-extrabold text-xl'>Reviving Retro PCs</p>
                                <p className='text-sm text-gray-500 '>What happens when old PCs are given modern upgrades?</p>
                            </div>

                        </div>
                        <div class=" flex flex-row mt-3 mb-3" >
                            <img className='w-40 h-40' src={Top} alt="/" />
                            <div className='ml-4 mr-4 b'>
                                <p className='text-2xl text-gray-400'>02</p>
                                <p className='text-extrabold text-xl'>Top 10 Laptops of 2022</p>
                                <p className='text-sm text-gray-500 '>Our best picks for various needs and budgets.</p>
                            </div>

                        </div >
                        <div class=" flex flex-row mt-3 mb-3">
                            <img className='w-40 h-40' src={Gaming} alt="/" />
                            <div className='ml-4 mr-4 '>
                                <p className='text-2xl text-gray-400'>03</p>
                                <p className='text-extrabold text-xl'>The Growth of Gaming</p>
                                <p className='text-sm text-gray-500 '>How the pandemic has sparked fresh opportunities.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main