import React from "react";
import { ProjectItem } from "@/core/entities/portfolio";

export const ProjectCard: React.FC<{ project: ProjectItem }> = ({
  project,
}) => {
  return (
    <div className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-indigo-400 text-sm font-semibold hover:text-indigo-300"
          >
            Ver proyecto en GitHub →
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-indigo-400 text-sm font-semibold hover:text-indigo-300"
          >
            Demo →
          </a>
        </div>
      </div>
    </div>
  );
};
