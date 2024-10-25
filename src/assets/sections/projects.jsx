import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects', { returnObjects: true })
    return (
        <div className="section-container" id="projects">
            <h2>{t('nav.projects')}</h2>
            <div className="space-y-2">
                {projects.map((project, index) => (
                    <div key={index} id={project.id} className="card bg-base-200 shadow-xl">

                        <div className="card-body items-center text-center">
                            <h3 className="card-title">
                                {project.name}
                            </h3>
                            {project.tasks.map((task, index) => (
                                <ul key={index} className="list-disc">
                                    <li className="">
                                        {task}
                                    </li>
                                </ul>
                            ))}
                            <a href={project.link} target="_blank" />
                            <div className="flex flex-wrap flex-auto">
                                {project.tags.map((tag, index) => (
                                    <div key={index} className="badge badge-accent m-1">
                                        {tag}
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* <figure className="px-10 pt-10">
                            <img src={project.preview} alt={project.name} className="mb-8" href="webitalize.de" target="_blank" />
                        </figure> */}
                    </div>
                ))}
            </div>
        </div>)
}

export default Projects;