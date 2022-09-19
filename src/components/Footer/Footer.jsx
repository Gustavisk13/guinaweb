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
                
                <p className={styles.fraseLogo}>Unindo Pessoas e Compartilhando Sentimentos</p>
            </div>

            <div className={styles.containerSocialLinks}>
                <p className={styles.redeSociaisText}>Rede Socais</p>
                <ul>
                    <li><a><FaYoutube/></a></li>
                    <li><a><FaInstagram/></a></li>
                    <li><a><FaDiscord/></a></li>
                    <li><a><FaTwitter/></a></li>
                    <li><a><FaTwitch/></a></li>
                </ul>
                <p className={styles.copyright}>Copyright© 2022 Guina Rangers. All rights reserved</p>
            </div>

            <div className={styles.containerMenuFooter}>
                <ul className={styles.containeruls}>
                    <ul>
                        <p>GUINA</p>

                        <li>Sobre nós</li>
                        <li>Membros</li>
                        <li>História</li>
                    </ul>
                    <ul>
                        <p>GRUPO</p>

                        <li>Regras</li>
                        <li>Ambiente Dev</li>
                        <li>RPG</li>

                    </ul>
                    <ul>
                        <p>SITE</p>

                        <li>Serviços</li>
                        <li>Reporte um Bug</li>
                        <li>FeedBack</li>
                    </ul>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer;