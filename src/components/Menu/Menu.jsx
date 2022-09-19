import logo from '../../images/logo/logo.jpg'
import styles from './menu.module.css'

function menu() {
  return (
    <>
        <nav className={styles.navigation}>
            <div className={styles.wrapper}>
                <a className={styles.logo} href="#home">
                    <img src={logo} alt="Guina Rangers Logo" title="Logo_da_GuinaRangers" />
                </a>
                {/*<----- navigation-logo ----->*/}

                <div className={styles.navigationMenu}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="TextEditor">Notícias</a></li>
                        <li><a href="#">Guinaverso</a></li>
                    </ul> 
                    <a className={styles.menuButton} href="#">Register</a>
                </div>
                {/*<----- navigation-menu ----->*/}
            </div>
            {/*<----- wrapper ----->*/}
        </nav>
        {/*<----- navigation ----->*/}
    </>
  )
}

export default menu;