'use client';
import Section from "./components/section";
import styles from "./page.module.scss";
import { data } from "./constants";
import { useEffect, useState } from "react";
import Hero from "./components/hero";

export default function Home() {
  const [info, setInfo] = useState<any[]>([])

  useEffect(() => {
    setInfo(data)
  }, [])
  return (
    <div>
      <Hero/>
      <div className={styles.sections}>

      {
        info?.map((item) =>
          <Section key={item.id} 
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            img={item.image}
          />
        )
      }
      </div>
    </div>
  );
}
