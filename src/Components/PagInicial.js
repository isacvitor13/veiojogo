import styles from './PagInicial.module.css'
import { Link } from 'react-router-dom'
import logo from './imgs/veio.png'
function PagInicial() {
    return (
            <header className={styles.center}>
                {/* <div className={styles.center}> */}
                    <div className={styles.logo}><img src={logo} /></div>
                    <div className={styles.menu}>
                        {/* <Link to='/'>PagInicial</Link> */}
                        <Link to='/'>Inicio</Link>
                        <Link to='/sozinho'>Sozinho</Link>
                        <Link to='/amigo'>Com Amigo</Link>
                    </div>

                {/* </div> */}
            </header>
    )
}
export default PagInicial