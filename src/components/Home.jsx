import React, { useEffect } from "react";
import avatarImg from "../assets/Poresh.jpg";
import cv from '../assets/Paresh CV (2) (1).pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false, easing: 'ease-in-out' });
    }, []);

    return (
        <div
            id="Home"
            className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20"
        >
            <div
                className="md:w-2/4 md:pt-10"
                data-aos="fade-right"
            >
                <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
                    {/* //<TextChange /> */}
                </h1>
                <div className="text-sm md:text-2xl tracking-tight flex flex-col gap-5">
                    
                        <span className="text-2xl">Hi all,  I am</span> <span className="text-5xl">Paresh Chakma</span>
                   
                    <p className="text-blue-700 text-4xl"> {">>"} Dedicated and Game changer</p>
                    <p className="text-xl">
                        I am passionate about giving my best in any work I do. With dedication, responsibility,
                        and a positive mindset, I strive to create meaningful results and make a difference.
                    </p>
                </div>
                <div className="flex  gap-5">
                    <a
                        href="#Footer"
                        className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Contact Me
                    </a>
                    <a
                        href={cv}
                        download
                        className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <div
                data-aos="fade-left"
                className="mt-10 md:mt-0"
            >
                <img className="w-130 rounded-2xl" src={avatarImg} alt="Poresh Chakma" />
            </div>
        </div>
    );
};

export default Home;
