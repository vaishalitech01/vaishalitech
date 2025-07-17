import React from "react";
import ServiceCard from "./ServiceCard";
import app from "./images/app.png";
import branding from "./images/branding.png";
import digital from "./images/digital.png";
import web from "./images/web.png";
import ui from "./images/ui.png";
import circle from "./images/circle.png";
import BouncyText from "../BouncyText";

const services = [
  {
    icon: web,
    title: "Web Development",
    description:
      "Build Fast. Perform Better. Convert More. We develop modern, responsive websites that don’t just look great — they work hard for your business. Whether it’s a portfolio, ecommerce, or custom platform, we bring your ideas to life with the latest tech.",
  },
  {
    icon: app,
    title: "Mobile App Development",
    description:
      "Extend Your Business Into Every Pocket. We design and develop intuitive, high-performance mobile apps that scale with your business goals. From Android to iOS, we help brands stay relevant in the mobile-first world.",
  },
  {
    icon: ui,
    title: "UI/UX Design",
    description:
      "Designs That Feel Right — Not Just Look Right. We craft beautiful and user-focused interfaces for web & mobile. Our UI/UX ensures users engage, stay, and convert — from wireframe to final interaction.",
  },
  {
    icon: digital,
    title: "Digital Marketing",
    description:
      "Turn Clicks Into Customers. From SEO to paid ads and content marketing, we create ROI-driven strategies that help your brand reach, attract, and convert the right audience — across platforms.",
  },
  {
    icon: branding,
    title: "Branding",
    description:
      "Build a Brand People Remember. Your brand is more than a logo. We craft visual identities, messaging, and brand systems that truly express who you are — and connect with your audience at every touchpoint.",
  },
];


export default function OurServices() {
  return (
    <div className="text-white mx-auto">
      <BouncyText
        text={`Our Services`}
        className="text-5xl  font-bold leading-tight text-center mb-12 text-white"
      />
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.slice(0, 3).map((svc, index) => (
            <ServiceCard key={svc.title} circle={circle} index={index} {...svc} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-8">
          {services.slice(3).map((svc, index) => (
            <ServiceCard key={svc.title} circle={circle} index={index + 3} {...svc} />
          ))}
        </div>
      </div>
    </div>
  );
}
