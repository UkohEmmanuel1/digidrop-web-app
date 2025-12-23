// components/SpaceMissions.tsx
"use client";

import Image from "next/image";

const SpaceMissions = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Astronaut */}
      <div className="absolute bottom-10 left-10">
        <Image
          src="/assets/sky-2.png"
          alt="Astronaut"
          width={250}
          height={250}
          className="drop-shadow-lg"
        />
      </div>

      {/* UFO */}
      <div className="absolute top-10 right-20">
        <Image
          src="/assets/sky-2.png"
          alt="UFO"
          width={300}
          height={200}
          className="drop-shadow-lg"
        />
      </div>

      {/* Asteroid */}
      <div className="absolute right-10 bottom-40">
        <Image
          src="/assets/sky-2.png"
          alt="Asteroid"
          width={100}
          height={100}
          className="drop-shadow-lg"
        />
      </div>

      {/* Daily Login Card */}
      <div className="absolute top-20 left-20 bg-gradient-to-br from-blue-700 to-black rounded-xl p-4 w-48 shadow-lg">
        <h3 className="text-white text-sm font-bold">DAILY LOGIN</h3>
        <button className="mt-3 px-3 py-1 bg-purple-500 text-xs text-white font-semibold rounded-lg">
          20 POINT
        </button>
      </div>

      {/* Mint Golden Pass */}
      <div className="absolute top-36 right-36 bg-gradient-to-br from-blue-700 to-black rounded-xl p-4 w-56 shadow-lg">
        <h3 className="text-white text-sm font-bold">MINT A GOLDEN PASS</h3>
        <button className="mt-3 px-3 py-1 bg-purple-500 text-xs text-white font-semibold rounded-lg">
          GET X5 OF ALL POINTS
        </button>
      </div>

      {/* Guest Card */}
      <div className="absolute right-20 bottom-48 bg-gradient-to-br from-blue-700 to-black rounded-xl p-4 w-48 shadow-lg">
        <h3 className="text-white text-sm font-bold">WE HAVE A GUEST</h3>
        <button className="mt-3 px-3 py-1 bg-purple-500 text-xs text-white font-semibold rounded-lg">
          5 POINTS
        </button>
      </div>

      {/* 30 Points Card */}
      <div className="absolute bottom-20 right-1/3 bg-gradient-to-br from-blue-700 to-black rounded-xl p-4 w-48 shadow-lg">
        <button className="px-3 py-1 bg-purple-500 text-xs text-white font-semibold rounded-lg">
          30 POINTS
        </button>
      </div>
    </div>
  );
};

export default SpaceMissions;
