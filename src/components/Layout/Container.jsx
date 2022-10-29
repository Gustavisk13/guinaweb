import styles from './Container.module.css'

function Container(props){
  <div className={`${styles.Container} ${styles[props.customClass]}`}>
    {props.children}
  </div>
}

export default Container;