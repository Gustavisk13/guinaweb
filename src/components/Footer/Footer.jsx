import styles from './footer.module.css';
import LogoGuina from '../../images/logo/logo.jpg';

import { FaInstagram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


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
                    <li><a><FaInstagram/></a></li>
                    <li><a><FaDiscord/></a></li>
                    <li><a><FaTwitch/></a></li>
                    <li><a><FaTwitter/></a></li>
                    <li><a><FaYoutube/></a></li>
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