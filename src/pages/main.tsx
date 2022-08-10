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
            <title>{ '< Tagr />' }</title>
        </Head>
        <div>
            <div className='mb-48'>
                <Loader/>
            </div>
            <Handler />
        </div>

        </Provider>


    )
}

export default Main
