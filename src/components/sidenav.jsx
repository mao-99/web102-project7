import styles from './sidenav.module.css';
export default function SideNav(){

    return (
        <>
            <div className={styles.sideNav}>
                <button className={styles.navLink}>Home</button>
                <button className={styles.navLink}>Create Crewmate</button>
                <button className={styles.navLink}>Crewmate Gallery</button>
            </div>
        </>
    )
}