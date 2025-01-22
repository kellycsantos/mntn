import { useEffect } from 'react'
import styles from './section.module.scss'

interface ISection {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    img: any
}

export default function Section({ id, title, subtitle, description, img }: ISection) {
    function order(x: number): Boolean {
        return x % 2 !== 0
    }

    useEffect(() => {
        order(6)
    })
    return (
        <section className={`${styles.section} `}>
            <article className={`${order(id) ? '' : `${styles.reverse}`}`}>
                <p
                    style={{ "--number": `'0${id}'` }}
                    className={styles.rules}>--- {subtitle}</p>
                <h2>{title}</h2>
                <p>{description} </p>
                <a href='#'>read more</a>
            </article>
            <img src={img?.src} alt={subtitle} />

        </section>
    )
}