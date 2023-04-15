// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './components/Navbar';
import Main from './components/Main';
// const inter = Inter({ subsetypes: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>wisecool</title>
        <meta name="description" content="Generated by next app" />
        <link rel='icon' href="/favicon.ico"/>
      </Head>
     <Navbar/> 
     <Main/>
    </div>
  );
}