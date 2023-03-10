import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.menu}>
          <ul>

         <li><Link href="/About">About</Link></li>
         <li><Link href="/Contact">Contact</Link></li>
         <li><Link href="/Blog">Blog</Link></li>
            
            
            
            
            
          </ul>
        </div>

        <div className={styles.header}>
          <h1>My Blogs </h1>
          <p>These are the health related blogs</p>
        </div>
       
      <div className={styles.blogs}>
        <h2>Popular blogs</h2>
        <div className={styles.blogsitems}>
          <h2>How to learn javascript in 2017</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, amet</p>
          </div>
        <div className={styles.blogsitems}>
          <h2>How to learn javascript in 2017</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, amet</p>
          </div>
        <div className={styles.blogsitems}>
          <h2>How to learn javascript in 2017</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, amet</p>
          </div>
        </div>

      
      </main>
    </>
  )
}
