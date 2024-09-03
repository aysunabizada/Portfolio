import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { FaLinkedin , FaGithubSquare} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";

function Contact() {
    return (
        <section id='contact' className="container m-auto pt-10">
            <h2 className="font-semibold text-gray-400 text-xl italic px-3 border-b py-4 border-gray-800">CONTACT</h2>
            <div className="relative">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2" />
                </div>
                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                    <div className=" py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12" data-aos="zoom-in-left">
                        <div className="mx-auto max-w-lg">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-300 sm:text-[2em]">Get in touch</h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">Contact Info:</p>
                            <dl className="my-2 text-base text-gray-500">
                                <div className="mt-6">
                                    <dt className="sr-only">Adress</dt>
                                    <dd className="flex">
                                        <MapPinIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3 text-lg hover:text-gray-200">Azerbaijan, Baku</span>
                                    </dd>
                                </div>
                                <div className="mt-5">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <a href='tel:+994503025456' className="ml-3 text-lg hover:text-gray-200">(+994) 50 302 5456</a>
                                    </dd>
                                </div>
                                <div className="mt-5">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <a href='mailto:nabizada.aysu@gmail.com' className="ml-3 text-lg hover:text-gray-200">nabizada.aysu@gmail.com</a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className='flex gap-6 py-4'>
                            <a href="https://www.linkedin.com/in/aysunabizada1/"><FaLinkedin className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
                            <a href="https://github.com/aysunabizada"><FaGithubSquare className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
                            <a href="https://x.com/AysuNebizade"><FaSquareXTwitter className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
                            <a href="https://vercel.com/aysus-projects-a7666433"><IoLogoVercel className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
                        </div>
                    </div>
                    <div className="py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12" data-aos="zoom-in-right">
                        <div className="mx-auto max-w-lg lg:max-w-none">
                            <h2 className="text-2xl pb-5 font-bold tracking-tight text-gray-300 sm:text-[2em]">Just say Hello</h2>
                            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="" className='text-gray-500'>Name</label>
                                    <input
                                        type="text"
                                        className="block w-full rounded-md bg-[#0000002f] border outline-none text-white border-gray-700 py-3 px-4 focus:border-indigo-800"
                                        placeholder="Blabla"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-gray-500'>Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-[#0000002f] border outline-none text-white border-gray-700 py-3 px-4 focus:border-indigo-800"
                                        placeholder="youradress@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-gray-500'>Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full rounded-md bg-[#0000002f] border outline-none text-white border-gray-700 py-3 px-4 focus:border-indigo-800"
                                        placeholder="+( xxx )xx xxx xx xx"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-gray-500'>Write what you want!</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md bg-[#0000002f] border outline-none text-white border-gray-700 py-3 px-4 focus:border-indigo-800"
                                        placeholder="Message"
                                        defaultValue={''}
                                    />
                                </div>
                                <div>
                                    <button type='submit' className="hover:brightness-110  hover:animate-pulse py-3 px-6 rounded-md bg-gray-800 shadow-lg shadow-indigo-800/50 text-white">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact