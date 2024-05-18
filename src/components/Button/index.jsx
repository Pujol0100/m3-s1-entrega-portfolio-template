import styles from '../Button/styles.module.css'

export function Button ({ text }) {
    return (
        <button className={`${styles.button} text-5`}>{text}</button>
    )
}