import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Title from '../components/Title'
import VoteButton from '../components/VoteButton'
import Handler from '../components/Handler'
import Loader from '../components/Loader'
import { Provider } from 'react-redux'
import store from '../redux/store'

const Main: NextPage = () => {

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        document.body.style.overflow = "hidden";
    }
    , [])


    return (
        <Provider store={store}>
            
        <Head>
            <title>{ 'Tagr by Steelcase' }</title>
        </Head>
        <div className="bg-[#F5F5F5]">
            <Loader />
            {/* <div className='h-screen'></div> */}
            <Handler />
        </div>
        

        </Provider>


    )
}

export default Main
