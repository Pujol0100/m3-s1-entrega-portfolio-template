import { projects } from '../Data/projects';
import { ProjectsCard } from '../projectsSection/projectsCard/index';
import styles from '../projectsSection/styles.module.css';

export function ProjectsSection() {
    return (
        <section className={styles.section}>
            <h2 className={`${styles.h2} tittle-2`}>Projetos</h2>
            <ul className={styles.ul}>
               <ProjectsCard projectsName={projects[0].name} projectsDescription={projects[0].description}></ProjectsCard>
               <ProjectsCard projectsName={projects[1].name} projectsDescription={projects[1].description}></ProjectsCard>
               <ProjectsCard projectsName={projects[2].name} projectsDescription={projects[2].description}></ProjectsCard>
               <ProjectsCard projectsName={projects[3].name} projectsDescription={projects[3].description}></ProjectsCard> 
            </ul>
        </section>
    )
}