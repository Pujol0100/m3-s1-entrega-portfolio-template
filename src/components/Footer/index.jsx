import wwpIcon from '../../assets/whatsapp.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import styles from '../Footer/styles.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}> 
            <div>
            <h2 className={`${styles.h2} tittle-2`}>Contato</h2>
            <div className={styles.container}>
                <img className={styles.img} src={wwpIcon} alt="Ícone do WhatsApp" />
                <img className={styles.img} src={linkedinIcon} alt="Ícone do Linkedin" />
                <img className={styles.img} src={githubIcon} alt="Ícone do GitHub" />
            </div>
            </div>
            
            <p className={`${styles.p} text-3`}>Todos os direitos reservados - Vinicius Pujol</p>
        </footer>
    )
}