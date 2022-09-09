import styles from './styles.module.css'

function welcome() {
  return (
    <>
      <aside className={styles.content}>
        <div className={styles.card}>
            <h2>Seja Bem-vindo&#40;a&#41;</h2>
            <p>A Guina Rangers</p>                       
        </div>
      </aside>
    </>
  )
}

export default welcome;