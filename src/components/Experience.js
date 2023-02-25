import React from 'react'
import DL from './../assets/Dl.png'

const Experience = () => {
    return (
        <div id="experience" className='pb-12 border-b md:h-3/6'>
            <div className='flex flex-col items-center content-center px-6 py-24 mx-auto space-y-10 md:max-w-6xl'>
                <div className='space-y-10 '>
                    <h1 className="text-2xl font-bold text-blue-400 ">Experience</h1>
                </div>
                <div className="flex justify-center ">
                    <div
                        className="flex flex-col bg-white rounded-lg shadow-lg dark:bg-neutral-700 md:max-w-3xl md:flex-row">
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={DL}
                            alt="" />
                        <div className="flex flex-col justify-start p-6">
                            <div className='mb-3'>
                                <h5
                                    className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                    Software Engineer
                                </h5>
                                <h2 className='font-medium text-gray-500'>
                                    Durbin Labs Ltd.
                                </h2>
                                <h1 className='text-sm text-gray-500'>
                                    7 May, 2022 - Present.
                                </h1>
                            </div>
                            <div>
                                <ul className='ml-5 leading-7 text-gray-700 list-disc'>
                                    <li>Developing new features.</li>
                                    <li>Integrate REST APIs.</li>
                                    <li>Optimize application for maximum speed and scalability.</li>
                                    <li>Fixing any website issues or bugs that arise</li>
                                    <li>Collaborate with back-end developers and web designers to improve usability</li>
                                </ul>
                            </div>

                            <div>
                                <ul className="flex flex-wrap text-lg md:max-w-sm">
                                    <li className="flex px-2 m-1 bg-gray-200 rounded-lg">JavaScript</li>
                                    <li className="flex px-2 m-1 bg-gray-200 rounded-lg">REACT</li>
                                    <li className="flex px-2 m-1 bg-gray-200 rounded-lg">REDUX</li>
                                    <li className="flex px-2 m-1 bg-gray-200 rounded-lg">AntD</li>
                                    <li className="flex px-2 m-1 bg-gray-200 rounded-lg">Git</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience