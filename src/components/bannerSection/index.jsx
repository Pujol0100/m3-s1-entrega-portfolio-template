import banner from '../../assets/Vector_PC.png'
import styles from '../bannerSection/styles.module.css'
import { Button } from '../Button/index';

export const BannerSection = () => {
    return (
        <section className={styles.section}>
            <div>
                <p className={`${styles.username} text-4` }>VINICIUSPUJOL</p>
                <h1 className={`${styles.h1} tittle-1`}>Bem vindo ao meu portfólio</h1>
                <p className={`${styles.p} text-4`}>
                Minha paixão pela programação é o que me impulsiona a desvendar os segredos 
                dessa área dinâmica e em constante evolução. Acredito que a programação é uma
                ferramenta poderosa para transformar o mundo, revolucionar indústrias e gerar
                impactos positivos na vida das pessoas. 
                </p>
                <Button text={'Saiba mais'}></Button>
            </div>
            <img className={styles.img} src={banner} alt="Banner" />
        </section >
    )
}