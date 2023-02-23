import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import VoteButton from "./VoteButton";
import CircularProgress from '@mui/material/CircularProgress';
import { BsQuestionCircle } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi"

import { useAppSelector, useAppDispatch } from '../utilities/hooks'
import store from "../redux/store";
import anime from "animejs";
import { Link } from "react-scroll";

export default function Handler() {
    const dispatch = useAppDispatch()
    const [image, setImage] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const loadingref = useRef({});
    loadingref.current = loading;

    useEffect(() => {
        init();
        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    function handleKeyDown(e: KeyboardEvent) {
        console.log(e)
        if (e.key === ' ' && !loadingref.current) {
            cycleImages('MISC');
        }
    }

    async function init() {
        setLoading(true);
        await pullImage();
        setLoading(false);
    }
    
    async function pullImage() {
        const { data }: {data?: any} = await axios.get(`/api/PullUntagged`);
        if (data) {
            setImage(data[0].url);
            dispatch({type: 'image/setImage', payload: data[0]})
        }
    }
    

    async function cycleImages(tag: string) {
            setLoading(true);
            const reduximage = store.getState().image;
            console.log(reduximage)
            axios.post('/api/PushNewTag', {idnum: reduximage.id, url: reduximage.url, tag: tag}).catch(err => {
                console.log(err);
            })
            await pullImage();
        // setLoading(false);
    }

    return (
        <div className="relative text-text-main" id="main">
            <button><Link
                to="top"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}><div className="absolute top-12 left-12 flex flex-row">
                    <BiArrowBack className="mt-1" />
                    <p className="pl-2">Back</p>
                </div></Link></button>
            
            
            <VoteButton direction='left' cycle={cycleImages} loading={loading} label='Meeting Spaces'/>
            <VoteButton direction='right' cycle={cycleImages} loading={loading} label='Workstations'/>
            <VoteButton direction='up' cycle={cycleImages} loading={loading} label='Private Spaces'/>
            <VoteButton direction='down' cycle={cycleImages} loading={loading} label='Private Office'/>
    
            <div className="h-screen w-screen text-text-main -mt-6">
                <div className="h-screen w-full flex justify-center items-center">

                        <div id="image" className={loading ? 'opacity-0 transition-opacity' : 'opacity-1 transition-opacity'}>
                            <img src={image} width={600} height={250} alt={'pic'} className="" onLoad={() => {
                                setLoading(false)
                                }} onError={pullImage}/>
                            <p className="text-center text-text-main font-bold italic absolute -bottom-10 inset-x-0">&apos;space&apos; for MISC</p>
                        </div>


                        <div className={loading ? 'opacity-1' : 'opacity-0'}>
                            <CircularProgress color="secondary" className="absolute left-0 top-0 bottom-0 right-0 m-auto"/>
                        </div>

                        
                </div>
            </div>
            
        </div>
    )
}
