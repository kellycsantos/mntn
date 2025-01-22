import styles from './hero.module.scss'

import iconTwitter from '@/assets/icons/twitter.png'
import iconInstagram from '@/assets/icons/instagram.png'

export default function Hero(){
    return(
  <header className={styles.header}>

    <section className={styles.hero}>
        <p>Follow Us</p>
        <a href="">
            <img src={iconTwitter.src} alt=""/>
        </a>
        <a href="">
            <img src={iconInstagram.src} alt=""/>
        </a>
    </section>
  </header>
    )
}