import gitHubIcon from '../../../assets/githubIcon.png';
import styles from './styles.module.css';

export function ProjectsCard ({ projectsName, projectsDescription }) {
    return (
        <li className={styles.li}>
            <div className={styles.container}>
                <h2 className={`${styles.h2} text-1`}>{projectsName}</h2>
                <img className={styles.img} src={gitHubIcon} alt="Ícone GitHub" />
            </div>
            <p className={`${styles.p} text-3`}>{projectsDescription}</p>
            <a className={`${styles.a} text-2`}href="">Saiba mais</a>
        </li>
    )
}