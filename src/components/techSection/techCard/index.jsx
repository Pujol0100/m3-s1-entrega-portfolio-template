import styles from '../techCard/styles.module.css';

export function TechCard({ techName, techImg }) {
    return (
        <li className={styles.li}>

            <img className={styles.img} src={techImg} alt="Ícone de LInguagem da Programação" />
            <p className={`${styles.p} text-1`}>{techName}</p>
        </li>
    )
}