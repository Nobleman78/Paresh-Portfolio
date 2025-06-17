import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
        Aos.refresh()
    }, []);

    const skills = [
        {
            name: "Customer Service Excellence.",
            icon: "https://cdn-icons-png.flaticon.com/512/4052/4052987.png", // Notebook with chart
            description: "Conducting interviews, focus groups, and ethnographic studies"
        },
        {
            name: " Communicationand Interpersonal Skills",
            icon: "https://cdn-icons-png.flaticon.com/512/3663/3663872.png", // Bar chart
            description: "SPSS/Stata for data interpretation"
        },
        {
            name: "Time Management and Multitasking.",
            icon: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png", // Checklist document
            description: "Assessing program impacts using SDG frameworks"
        }, {
            name: "Team Collaboration and Leadership",
            icon: "https://cdn-icons-png.flaticon.com/512/1997/1997925.png", // Globe with nodes
            description: "Intersectional lens on gender/class/race dynamics"
        },
        {
            name: "Knowledge of FoodSafety and HygieneStandards",
            icon: "https://cdn-icons-png.flaticon.com/512/3663/3663943.png", // Money with graph
            description: "Macro-level systems thinking"
        },
        {
            name: "Management Skill",
            icon: "https://cdn-icons-png.flaticon.com/512/3291/3291697.png", // Data nodes
            description: "Coding qualitative data"
        },
       
        
    ];

    return (
        <section
            id="Skills"
            className="py-20  dark:bg-gray-900"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 r" data-aos="fade-down">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            My Expertise
                        </span>
                    </h2>
                    <p className="text-xl text-white dark:text-gray-300">
                        Expertise I've mastered through experience
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-purple-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
                            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}