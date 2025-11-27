import { IoArrowBack } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import techIcons from "../data/TechIcons";


function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button className="flex items-center py-4 mb-4 text-gray-700 cursor-pointer hover:text-gray-900 transition" onClick={() => navigate(-1)}>
          <IoArrowBack size={24} className="mr-1" />
          <span className="font-medium text-lg">Back</span>
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.projectName}</h1>

        {/* Project Image */}
        <img src={project.projectImg} alt="Skinfriend project preview" className="rounded-xl shadow-md mb-8" />

        {/* Description */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-8">{project.description}</p>

        <hr className="border-gray-300 mb-8" />

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tools & Technologies</h2>
        <ul className="flex flex-wrap gap-3 mb-8">
          {project.techStack.map((t) => (
            <li key={t} className="flex items-center bg-white border border-gray-200 shadow-sm px-3 py-2 rounded-full text-sm text-gray-800">
              {techIcons[t].icon}
              <span className="ml-2">{techIcons[t].label}</span>
            </li>
          ))}
        </ul>
        <hr className="border-gray-300 mb-8" />

        {/* Role Section */}
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Role</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{project.role}</h3>

        <ul className="list-disc ms-6 space-y-2 text-sm text-gray-700 leading-relaxed">
            {project.roleDesc.map((rd) => {
              return <li>{rd}</li>;
            })}
        </ul>

        {/* GitHub Link */}
        <div className="flex justify-center mt-10">
          <a href={project.projectLink} target="_blank" rel="noreferrer" className="flex items-center px-5 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition shadow-sm hover:shadow-md">
            View on GitHub <FaGithub size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
