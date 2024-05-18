import styles from "../techSection/styles.module.css";
import { TechCard } from "./techCard";
import {technologies} from '../Data/technologies';

export function TechSection() {
    return (
        <section className={styles.section}>
            <h2 className={`${styles.h2} tittle-3`}>Tecnologias</h2>
            <ul className={styles.ul}>
                <TechCard techName={technologies[0].name} techImg={technologies[0].img}></TechCard>
                <TechCard techName={technologies[1].name} techImg={technologies[1].img}></TechCard>
                <TechCard techName={technologies[2].name} techImg={technologies[2].img}></TechCard>
                <TechCard techName={technologies[3].name} techImg={technologies[3].img}></TechCard>
            </ul>
        </section>
    )
}