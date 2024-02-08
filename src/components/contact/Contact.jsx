export default function Contact() {
    return (
        <>
            <div className="grid grid-cols-2 gap-8 p-10">
                <div className="bg-gray-100 p-6 ml-40">
                    <div className="text-justify">
                        <h1 className="font-bold text-2xl ">Get In Touch : </h1>
                        <p className="text-lg">Fill the form to start a conversation</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            Acme Inc, Street, State, Postal Code
                        </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            +44 1234567890
                        </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-600">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            info@acme.org
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="p-5">
                        <form action="" className="grid grid-rows-3 gap-3 ">
                            <label className=" hidden">Full Name</label>
                            <input type="text" placeholder="full name"
                                className="border-gray-400 border-2 
                     w-64 h-12 rounded-lg p-3 focus:outline-none 
                     focus:border-orange-400 font-semibold"/>
                            <label className=" hidden">Address</label>
                            <input type="text" placeholder="Address"
                                className="border-gray-400 border-2 
                     w-64 h-12 rounded-lg p-3 focus:outline-none 
                     focus:border-orange-400 font-semibold"/>
                            <label className=" hidden"> Telephone No</label>
                            <input type="text" placeholder="Phone no"
                                className="border-gray-400 border-2 
                     w-64 h-12 rounded-lg p-3 focus:outline-none 
                     focus:border-orange-400 font-semibold"/>
                            <button className="text-white bg-red-700 rounded-lg
                  p-2 hover:bg-red-600 cursor-pointer
                 w-28 mt-0">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}