import Navbar from "../components/Navbar";
import ProjectCard from "../components/Project";
import projects from "../data/projects.json";
import { Helmet } from "react-helmet";

function ProjectPage() {
  return (
    <div>
      <Helmet>
        <title>Projects — Firza Hakim</title>
        <meta name="description" content="A showcase of software development projects created by Firza Hakim. Includes personal work, experiments, and learning projects." />
        <meta property="og:title" content="Projects — Firza Hakim" />
        <meta property="og:description" content="Browse software development projects by Firza Hakim." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="w-full max-w-2xl mx-auto md:pt-12 pt-4 px-4 sm:px-6 lg:px-8">
        <Navbar />
        {projects.map((item) => (
          <ProjectCard key={item.id} image={item.projectImg} title={item.projectName} description={item.description} tech={item.techStack} link={`/projects/${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
