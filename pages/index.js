import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'
import WorkList from '../components/WorkList'
import styles from './home.css'

const Home = () => (
  <div>
    <Header />
    <div className={styles.home}>
      <Head>
        <title>Portfolio</title>
        <link href="/static/common.css" rel="stylesheet" />
      </Head>
      <WorkList />
    </div>
  </div>
)

export default Home
