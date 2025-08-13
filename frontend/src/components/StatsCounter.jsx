import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/statsCounter_imgs/img1.jpg'

function StatsCounter() {
    const sectionRef = useRef();
    const [start, setStart] = useState(false);
    const [counts, setCounts] = useState({
        clients: 0,
        active: 0,
        satisfaction: 0,
        years: 0,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStart(true);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!start) return;

        const goals = {
            clients: 88,
            active: 26,
            satisfaction: 98,
            years: 4,
        };

        const interval = setInterval(() => {
            setCounts((prev) => {
                const next = { ...prev };
                for (let key in goals) {
                    if (prev[key] < goals[key]) next[key] += 1;
                }
                return next;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [start]);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-blue-950 text-white text-center flex flex-col md:flex-row justify-between px-5 md:px-10 gap-5"
        >
            <div className="text-center">
                <div className=" space-y-10 ">
                    <h1 className="font-bold text-4xl">Need the Best Help for Your Digital Growth ?</h1>
                    <p className="text-sm">Work With a Result-Driven No.1 AI Digital Marketing Agency. Contact Us Now and See the Difference!</p>
                </div>
                <button className="mt-10 text-[aqua] border cursor-pointer px-4 py-1 rounded-full border-[aqua] hover:bg-blue-900 hover:scale-105 transition-all duration-300 "><Link to={"/contact-us"}>Contact Us Now</Link></button>
            </div>

            <div className="grid grid-cols-2  gap-16 text-xl font-semibold mt-10 md:ml-5 md:mt-0">
                <div>
                    <span className="text-5xl text-[aqua]">{counts.clients}+</span><br />
                    <span className="text-sm text-gray-200">Happy Clients</span>
                </div>
                <div>
                    <span className="text-5xl text-[aqua]">{counts.active}+</span><br />
                    <span className="text-sm text-gray-200">Active Clients</span>
                </div>
                <div>
                    <span className="text-5xl text-[aqua]">{counts.satisfaction}%</span><br />
                    <span className="text-sm text-gray-200">Satisfaction Rate</span>
                </div>
                <div>
                    <span className="text-5xl text-[aqua]">{counts.years}+</span><br />
                    <span className="text-sm text-gray-200">Glorious Years</span>
                </div>
            </div>
            
            <Link
  to={'https://www.designrush.com/'}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center md:ml-10 md:mt-0 mt-15"
>
  <img
    src={img}
    alt="VaishaliTech Featured on the DesignRush list of top Digital Marketing Companies"
    className="md:h-full md:w-[20rem] w-[60%] rounded-xl hover:scale-110 transition-all duration-500"
  />
</Link>

        </section>
    );
}

export default StatsCounter;
