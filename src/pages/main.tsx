import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ImageComponent from '../components/ImageComponent'
import styles from '../styles/Home.module.css'
import ImageList from '../components/ImageFactory'
import { useEffect, useState } from 'react'
import Title from '../components/Title'
import VoteButton from '../components/VoteButton'
import Handler from '../components/Handler'
import Loader from '../components/Loader'

const Main: NextPage = () => {

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        document.body.style.overflow = "hidden";
    }
    , [])


    return (
        <div>
            {/* <div className='mb-48'>
                <Loader/>
            </div> */}
            <Handler />
        </div>


    )
}

export default Main
