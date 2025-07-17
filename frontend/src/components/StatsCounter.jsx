import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function StatsCounter() {
  const sectionRef = useRef();
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    active: 0,
    satisfaction: 0,
    years: 0,
  });

  const goals = {
    clients: 80,
    active: 10,
    satisfaction: 100,
    years: 3,
  };

  // Helper function to start animation
  const startCounting = () => {
    setCounts({
      clients: 0,
      active: 0,
      satisfaction: 0,
      years: 0,
    });

    let interval = setInterval(() => {
      setCounts((prev) => {
        const next = { ...prev };
        let done = true;

        for (let key in goals) {
          if (prev[key] < goals[key]) {
            next[key] += 1;
            done = false;
          }
        }

        if (done) clearInterval(interval);
        return next;
      });
    }, 30);
  };

  // Start on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          startCounting(); // run animation on first visible
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Re-trigger every 50 seconds
  useEffect(() => {
    if (!start) return;
    const loopInterval = setInterval(() => {
      startCounting();
    }, 50000); // every 50 seconds

    return () => clearInterval(loopInterval);
  }, [start]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-blue-950 text-white text-center flex flex-col md:flex-row justify-between px-5 md:px-15 gap-5"
    >
      <div className="text-center">
        <div className="space-y-10">
          <h1 className="font-bold text-4xl">
            Need the Best Help for Your Digital Growth?
          </h1>
          <p className="text-sm">
            Work With a Result-Driven, One Of The Best Digital  Agency. Contact
            Us Now and See the Difference!
          </p>
        </div>
        <button className="mt-10 text-[aqua] border cursor-pointer px-4 py-1 rounded-full border-[aqua]">
          <Link to={"/contact-us"}>Contact Us Now</Link>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-16 text-xl font-semibold mt-10 md:mt-0">
        <div>
          <span className="text-5xl text-[aqua]">{counts.clients}+</span>
          <br />
          <span className="text-sm text-gray-200">Happy Clients</span>
        </div>
        <div>
          <span className="text-5xl text-[aqua]">{counts.active}+</span>
          <br />
          <span className="text-sm text-gray-200">Active Clients +</span>
        </div>
        <div>
          <span className="text-5xl text-[aqua]">{counts.satisfaction}%</span>
          <br />
          <span className="text-sm text-gray-200">Satisfaction Rate</span>
        </div>
        <div>
          <span className="text-5xl text-[aqua]">{counts.years}+</span>
          <br />
          <span className="text-sm text-gray-200">Glorious Years</span>
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;
