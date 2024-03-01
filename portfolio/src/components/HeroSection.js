import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-purple-50 top-[5em] relative">
      <div className="container  mx-auto grid grid-cols-2 gap-4 p-4">
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 font-semibold mb-2">HELLO</p>
          <h1 className="text-3xl font-light mb-4">
            I'm <span className="font-bold">Michał<br />a</span> Fullstack Developer
          </h1>
          <p className="text-gray-500 mb-8">
            Welcome to my web developer portfolio! I'm a skilled and
            creative fullstack developer with a passion for programming responsive, and user-friendly websites. I've worked on a variety of
            web projects containing of React frontend and C# backend, ranging from personal blogs to e-commerce platforms.
          </p>
          <div className="flex gap-4">
            <Link to="/hire" className="rounded py-2 px-4 bg-purple-500 text-white font-bold hover:bg-purple-700">Hire Me</Link>
            <Link to="/portfolio" className="rounded py-2 px-4 border border-purple-500 text-purple-500 font-bold hover:bg-purple-500 hover:text-white">Portfolio</Link>
          </div>
        </div>
        <div className="grid place-items-center">
          <img src="assets/profile.jpg" alt="profile" className="w-64 h-64 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
