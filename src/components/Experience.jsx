import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

import laz from '../assets/Laz.jpeg';
import hebang from '../assets/Hebang.webp';

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation duration
            once: true,      // only animate once
        });
    }, []);

    return (
        <div id="Experience" className="p-10 md:p-24 bg-white">
            <h2
                className="text-4xl font-bold mb-6"
                data-aos="fade-down"
            >
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    Experiences
                </span>
            </h2>
            <div className="flex flex-col gap-10 w-full">
                <div
                    className="flex flex-col md:flex-row items-center gap-10 bg-gray-200 rounded-xl"
                    data-aos="fade-right"
                >
                    <img className="w-full md:w-50 h-50 rounded-xl" src={laz} alt="" />
                    <div className="flex flex-col md:flex-row px-5 py-2 md:px-0 md:py-0 md:items-center gap-10 w-full justify-around">
                        <p className="text-3xl">Sales Executive at Lazz Pharma</p>
                        <p className="text-3xl">7 Months</p>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row items-center gap-10 bg-gray-200 rounded-xl"
                    data-aos="fade-left"
                >
                    <img className="w-full md:w-50 h-50" src={hebang} alt="" />
                    <div className="flex flex-col md:flex-row px-5 py-2 md:px-0 md:py-0 gap-10 md:items-center justify-around w-full">
                        <p className="text-3xl">Sales Executive at Hebang</p>
                        <p className="text-3xl">7 Months</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
