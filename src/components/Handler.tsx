import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import VoteButton from "./VoteButton";
import CircularProgress from '@mui/material/CircularProgress';
import { BsQuestionCircle } from "react-icons/bs";

import { useAppSelector, useAppDispatch } from '../utilities/hooks'
import store from "../redux/store";

export default function Handler() {
    const dispatch = useAppDispatch()
    const [image, setImage] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        init();
    }, []);

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
        await axios.post('/api/PushNewTag', {idnum: reduximage.id, url: reduximage.url, tag: tag}).catch(err => {
            console.log(err);
        })
        await pullImage();
        // setLoading(false);
    }

    return (
        <div className="relative" id="main">
            
            <VoteButton direction='left' cycle={cycleImages} label='Meeting Spaces'/>
            <VoteButton direction='right' cycle={cycleImages} label='Workstations'/>
            <VoteButton direction='up' cycle={cycleImages} label='Private Spaces'/>
            <VoteButton direction='down' cycle={cycleImages} label='Private Office'/>
        
            <div className="bg-white rounded-2xl absolute top-8 pt-4 pb-4 pl-4 pr-96 shadow-black/50 shadow-md hover:bg-green-900" style={{right: '-22rem'}}>
                <button><BsQuestionCircle className="text-4xl hover:text-8xl"/></button>
            </div>
            
            <div className="min-h-screen min-w-screen">
                {/* <div className="flex justify-center items-center h-screen z-0">
                </div> */}
                <div className="fixed h-full w-full flex items-center justify-center">
                    <div className={loading ? '' : 'shadow-2xl drop-shadow-xl shadow-black/50 '}>
                        <div className={loading ? 'opacity-0' : 'opacity-1'}>
                            <img src={image} alt={'pic'} className="" onLoad={() => {setLoading(false)}} onError={pullImage}/>
                        </div>
                        <div className={loading ? 'opacity-1' : 'opacity-0'}>
                            <CircularProgress color="secondary" className="absolute left-0 top-0 bottom-0 right-0 m-auto"/>
                        </div>
                        {/* {loading ? <CircularProgress color="secondary"/> : <img src={image} alt={'pic'}/>} */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
