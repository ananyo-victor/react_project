import React from 'react'

function Contact(props) {
    return (
        <>
            <div id='contact' className={`relative top-[${props.height}px] sm:snap-start scroll-mt-[${props.height}px] dark:bg-gray-900 bg-gray-200 dark:text-gray-300 text-gray-600`}>

                <div className={`container sm:h-[calc(100vh-${props.height}px)] h-fit flex flex-col justify-evenly mx-auto px-5 sm:pt-16 pb-10`}>

                    <div className="flex w-full flex-col text-center justify-evenly h-full">
                        <p className="title-font text-4xl font-medium sm:text-6xl font-mono">Contact</p>
                        <p className="my-6 text-lg">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5">
                        <div className=''>
                            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                            <div className="mb-8 flex items-center gap-6">
                                <a href="mailto:ananyomaitroan@gmail.com" target="_blank" rel="noopener noreferrer" className="text-transparent">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <g id="Communication / Mail"><path id="Vector" d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z" stroke="#fb0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/ananyo-maitra" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                                        <g id="SVGRepo_iconCarrier"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g>
                                    </svg>
                                </a>
                                <a href="https://web.whatsapp.com/8597903406" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                                        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#008e00">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]" /></g></g>
                                    </svg>

                                </a>
                            </div>
                            {/* <p className=" ">Phone: <span className="text-red-500">+91-8597903406</span></p> */}
                            {/* <p className=" ">Email:<span className="text-red-500"> ananyomaitroan@gmail.com</span></p> */}
                            <p className=" ">Phone:<a href="tel:8597903406" target="_blank" rel="noopener noreferrer" className="text-red-500"> 8597903406</a></p>
                            <p className=" ">Email:<a href="mailto:ananyomaitroan@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500"> ananyomaitroan@gmail.com</a></p>
                            <p className=" ">Address:<a href="https://maps.app.goo.gl/uvY3t7Ft4LnLv3429" target="_blank" rel="noopener noreferrer" className="text-red-500"> K.J.Sanyal Road, Opposite of Netaji Club, Malda (West Bengal) - 732101</a></p>

                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block  text-sm font-medium mb-2" forhtml="name">Name</label>
                                    <input className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" type="text" id="name" name="name" placeholder="Enter your name" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block   text-sm font-medium mb-2" forhtml="email">Email</label>
                                    <input className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block   text-sm font-medium mb-2" forhtml="message">Message</label>
                                    <textarea className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                                </div>
                                <div className='flex justify-center'>
                                    <button className="relative inline-flex items-center justify-center md:mr-5 p-0.5 mx-auto rounded-lg group bg-gradient-to-br from-red-600 to-red-800 hover:text-white"><span className='relative transition-all ease-in duration-75 dark:bg-gray-900 bg-gray-200 rounded-md group-hover:bg-opacity-0 md:px-5 p-2'>Send Message</span></button>
                                    {/* <button className="px-6 py-3 bg-red-500 text-white rounded-md font-medium hover:bg-red-600" type="submit">Send Message</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
