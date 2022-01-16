import bgi from '/public/kpu.jpg'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/schools.module.css'
import kpuStyles from '/styles/kpu.module.css'
import { getSortedPostsData } from '../../lib/posts'



export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function KPU() {
    return (
    <>
      <div className="relative" id='dick'>
      <Image
        layout="intrinsic"
        className="object-center object-cover pointer-events-none"
        src={bgi}
        
      />
      </div>

      <div className='image'>
        <Head>
          <title>DB Forum | KPU</title>
        </Head>


        <div>
          <h1 className={styles.title}>Kwantlen Polytechnic University</h1>
          <a className={kpuStyles.btn}>Create Post</a>

        <div id = 'cock'>
          <h1>Posts</h1>
          
            <a className={kpuStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={kpuStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={kpuStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={kpuStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={kpuStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={kpuStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={kpuStyles.single}><h3>Example Post</h3></a><br></br>
          
        </div>
        </div>


      </div>
      </>
    )
  }