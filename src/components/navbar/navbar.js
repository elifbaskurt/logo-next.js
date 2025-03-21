import styles from "./navbar.module.css";
import Link from "next/Link";
import Links from "./links/Links"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
            <Links />
            </div>
        </div>
    )
}

export default Navbar