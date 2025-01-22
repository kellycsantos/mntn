import styles from './footer.module.scss'
import Logo from '@/assets/icons/logo.svg'
export default function Footer() {
    return (
        <footer id={styles.footer}>
            <section className={styles.details}>
                <article>
                    <img src={Logo.src} alt='mntn' />
                    <p>Get out there & discover your next slope, mountain & destination!</p>
                </article>

                <p className={styles.copy}>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
            </section>

            <section>
                <h4>More on The Blog</h4>
                <ul>
                    <li><a href="#">About MNTN</a></li>
                    <li><a href="#">Contributors & Writers</a></li>
                    <li><a href="#">Write For Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </section>
            <section>
                <h4>More on MNTN</h4>
                <ul>
                    <li><a href="#">The Team</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </section>
        </footer>
    )
}