import React from 'react';
import { FaFacebook, FaTwitterSquare, FaGoogle, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="text-center bg-gray-900 text-white mt-12">
                <div className="container px-6 pt-6">
                    <div className="flex justify-center mb-6">
                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaFacebook className="w-5 h-full mx-auto"></FaFacebook>
                        </a>

                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaTwitterSquare className="w-4 h-full mx-auto"></FaTwitterSquare>
                        </a>

                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaGoogle className="w-4 h-full mx-auto"></FaGoogle>
                        </a>

                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaInstagramSquare className="w-4 h-full mx-auto"></FaInstagramSquare>
                        </a>

                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaLinkedinIn className="w-4 h-full mx-auto"></FaLinkedinIn>
                        </a>
                    </div>
                </div>

                <div className="text-center p-4 bg-[#000000] opacity-[0.2]">
                    © 2022 Copyright :
                    <a className="text-whitehite" href="https://tailwind-elements.com/"> Monitor WareHouse</a>
                </div>
            </footer>
        </>
    )
};

export default Footer;