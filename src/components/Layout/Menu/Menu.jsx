import Logo from '../../../images/logo.jpg'
import styles from './menu.module.css'
import { Link } from 'react-router-dom'

function menu() {
  
  return (
    <header>
			<nav className={styles.navigation} >
				<div className={styles.wrapper}>
					<Link className={styles.logo} to='/'>
							<img src={Logo} alt="Guina Rangers Logo" title="Logo_da_GuinaRangers" />
					</Link>

					<div className={styles.navigationMenu}>
						<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Sobre nós</a></li>
								<li><Link to='/TextEditor'>Notícias</Link></li>
								<li><a href="#">Guinaverso</a></li>
						</ul> 
						<Link className={styles.menuButton} to='/register'>Register</Link>
					</div>
				</div>
			</nav>
    </header>
  )
}

export default menu;