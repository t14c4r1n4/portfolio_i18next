import { useTranslation } from "react-i18next";
import projectList from "../constants/projects";

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className="section-container ">
            <h2>{t('nav.projects')}</h2>
            <div className="space-y-2">
                {projectList.map((project, index) => (
                    <div key={index} id={project.id} className="card bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project.preview} alt={project.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">
                                {project.name}
                            </h3>
                            <div>
                                description?
                            </div>
                            {project.tasks.map((task, index) => (
                                <ul key={index} className="list-disc">
                                    <li className="">
                                        {task}
                                    </li>
                                </ul>
                            ))}
                            <div className="flex flex-wrap flex-auto">
                                {project.tags.map((tag, index) => (
                                    <div key={index} className="badge badge-accent m-1">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}

export default Projects;