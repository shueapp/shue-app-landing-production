import React from "react";
import Image from "next/image";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";
import shoeBox from "@/assets/img/shoe-box-transparent.png";
import shoe1 from "@/assets/img/shoe-1.png";
import shoe3 from "@/assets/img/shoe-3.png";

export const Hero = () => {
  return (
    <section className="relative bg-brand-dark py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight text-white mb-6">
            Find Your
            <br />
            Next Favorite
            <br />
            <span className="text-brand-green">Pair</span> 👟
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-md mb-8">
            ShueApp is the friendly marketplace made just for shoes. Every
            seller is verified, so shopping and selling both feel like a
            treat, not a gamble.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              type="button"
              title="Coming soon"
              className="bg-brand-green/60 text-brand-dark/70 px-6 py-3 rounded-full font-bold cursor-not-allowed flex items-center"
            >
              Start Shopping
              <ComingSoonBadge />
            </button>
            <button
              type="button"
              title="Coming soon"
              className="bg-transparent border-2 border-white/40 text-white/60 px-6 py-3 rounded-full font-bold cursor-not-allowed flex items-center"
            >
              Sell Your Shoes
              <ComingSoonBadge />
            </button>
            <svg
              className="hidden sm:block w-14 h-14 text-brand-green animate-wiggle"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M8 22 C 28 8, 42 42, 66 26"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M56 18 L 68 26 L 57 38"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={16} className="text-brand-green" />
              Every seller ID-verified
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-brand-green" />
              You&apos;re covered on every order
            </span>
          </div>
        </div>

        {/* Visual stage */}
        <div className="relative flex items-center justify-center h-[360px] md:h-[440px]">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-brand-green/10 rounded-full blur-3xl" />

          {/* Orbit: shoe-1, shoe-2 and shoe-3 spin around the box, which stays fixed at the center */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Center product shot, fixed, does not rotate */}
            <div
              className="absolute inset-0 flex items-center justify-center z-10 animate-float"
              style={{ "--float-rot": "-3deg" } as React.CSSProperties}
            >
              <Image
                src={shoeBox}
                alt="Sneaker in an open ShueApp delivery box"
                className="w-56 md:w-80 h-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Rotating ring carrying all three shoes */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={shoe1}
                  alt="Air Jordan 1 sneaker"
                  className="w-24 md:w-32 h-auto drop-shadow-2xl"
                  priority
                />
              </div>
              <div
                className="absolute top-[78%] left-[95%] -translate-x-1/2 -translate-y-1/2 text-6xl md:text-7xl select-none drop-shadow-2xl"
                aria-label="Sneaker"
              >
                👟
              </div>
              <div className="absolute top-[78%] left-[5%] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={shoe3}
                  alt="ShueApp package"
                  className="w-14 md:w-20 h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
