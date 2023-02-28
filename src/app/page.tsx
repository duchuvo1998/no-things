import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.center}>Nothing!</h1>
      </div>
      <div className={styles.center}>
        <h4 className={styles.center}>Simply not anything</h4>
      </div>
    </main>
  )
}
