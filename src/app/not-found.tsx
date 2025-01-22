'use client';
import notFoundBg from '../assets/not-found-bg.webp'
import styles from './not-found.module.scss'
export default function notFound(){
    return(
        <section className={styles.notfound} >
        <h1>Oh no, you've gone the wrong way!</h1>
        <h2>Shall we go back to the <a href="/">beginning</a>?</h2>
        <img src={notFoundBg.src} alt={'lost hiker man with your dog'} />
        </section>
    )
}