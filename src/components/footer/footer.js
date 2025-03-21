import styles from "./footer.module.css"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>logodev</div>
            <div className={styles.text}>
                lorem ipsum © All rights reserved.
            </div>
        </div>
    )
}
export default Footer