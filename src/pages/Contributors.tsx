import React from 'react';
import RanaImage from "../images/Rana_.png";
import SomnathImage from '../images/somnathHazra.png';
import Rishita from "../images/Rishita.jpg";
import Souvik from "../images/Souvik.jpg";

const contributors = [
  {
    name: "Prof. Somnath Hazra",
    role: "Project Supervisor",
    image: SomnathImage,
    description: "Specialist in Electrical Machines and Renewable Energy, with extensive research contributions utilizing Machine Learning and Deep Learning."
  },
  {
    name: "Rana Karmakar",
    role: "Team Member",
    image: RanaImage,
    description: "Specializing in deep learning model architecture and full-stack development."
  },
  {
    name: "Souvik Chatterjee",
    role: "Team Member",
    image: Souvik,
    description: "Expert in frontend development, user experience design, IoT, and embedded systems."
  },
  {
    name: "Rishita Rani",
    role: "Team Member",
    image: Rishita,
    description: "Specializing in dataset curation, model training methodologies, and backend development."
  }
];

function Contributors() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Our Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contributors.map((contributor) => (
          <div key={contributor.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
            <img
              src={contributor.image}
              alt={contributor.name}
              className="w-72 h-72 object-cover object-top rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{contributor.name}</h3>
              <p className="text-green-600 font-medium">{contributor.role}</p>
              <p className="text-gray-600 mt-2">{contributor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contributors;
