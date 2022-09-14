import styles from './footer.module.css';
import LogoGuina from '../../images/logo/logo.jpg';

function Footer() {
  return (
    <>
        <div className={styles.gradient}></div>
        <footer>
            <div className={styles.containerLogoAndMessage}>
                <a className={styles.guinaRangerLogo}>
                    <img src={LogoGuina} alt="Guina_Rangers_Logo" title="Logo_da_GuinaRangers"/>
                </a>
                
                <p>Unindo Pessoas e Compartilhando Sentimentos</p>
            </div>

            <div className={styles.containerSocialLinks}>
                <p>Rede Socais</p>
                <ul>
                    <li><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>
                    <li><a>5</a></li>
                </ul>
                <p>Copyright© 2022 Guina Rangers. All rights reserved</p>
            </div>

            <div className={styles.containerMenuFooter}>
                <ul>
                    <li>1</li>
                </ul>

                <ul>
                    <li>1</li>
                </ul>

                <ul>
                    <li>1</li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer;