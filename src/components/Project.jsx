import { NavLink } from "react-router";
import techIcons from "../data/TechIcons";

function ProjectCard({ image, title, description, tech, link }) {
  return (
    <NavLink to={link} rel="noopener noreferrer" className="group block mb-4 overflow-hidden rounded-2xl border border-gray-400 bg-white hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>

      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black transition">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex items-center gap-3 mt-3 text-gray-700">
          {tech.map((t) => (
            <div key={t}>{techIcons[t].icon}</div>
          ))}
        </div>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
