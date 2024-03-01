import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo512.png'

const ProjectCard = ({ title, description, link, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-4">
        
      <h3 className="text-center text-xl font-semibold mb-2">{title}</h3>
      <br/>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
        Learn more
      </Link>
      <div className="mb-4">
        <img src={imageSrc} alt={title} className="w-100px h-auto rounded-md" />
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="relative top-[4em] container mx-auto mt-8">
      <h1 className="text-center text-4xl font-semibold mb-4">Portfolio</h1>

      <ProjectCard
        title="Checked App"
        description="Application that can help you organize your bag when you are traveling and also find items needed when traveling to various places. It's a group project with 3 contributors."
        link="https://github.com/CheckedAppTeam/CheckedApp"
        imageSrc={logo}
      />

      <ProjectCard
        title="Party Game"
        description="This is a game that will be able to connect people into a group by some code and randomize one of them to have different questions. Then players, based on answers, choose the impostor. (Project in progress)"
        link="https://github.com/michalbieniek02/PartyGame"
        imageSrc={logo}
      />
    </div>
  );
};

export default PortfolioPage;
