import styles from './hero.module.scss'

import iconTwitter from '@/assets/icons/twitter.webp'
import iconInstagram from '@/assets/icons/instagram.webp'

export default function Hero(){
    return(
  <header className={styles.header}>

    <section className={styles.hero}>
        <p>Follow Us</p>
        <a href="">
          twitter
            <img src={iconTwitter.src} />
        </a>
        <a href="">
          instagram
            <img src={iconInstagram.src} />
        </a>
    </section>
  </header>
    )
}