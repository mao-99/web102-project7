import styles from './sidenav.module.css';
import { Link } from 'react-router-dom';
export default function SideNav(){

    return (
        <>
            <div className={styles.sideNav}>
                <Link to='/'  className={styles.navLink}>Home</Link>
                <Link to='/create'  className={styles.navLink}>Create Crewmate</Link>
                <Link to='/gallery'  className={styles.navLink}>Crewmate Gallery</Link>
            </div>
        </>
    )
}