import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import VoteButton from "./VoteButton";
import CircularProgress from '@mui/material/CircularProgress';

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
        const reduximage = store.getState().image;
        console.log(reduximage)
        await axios.post('/api/PushNewTag', {idnum: reduximage.id, url: reduximage.url, tag: tag}).catch(err => {
            console.log(err);
        })
        setLoading(true);
        await pullImage();
        setLoading(false);
    }

    return (
        <div className="relative" id="main">
            
            <VoteButton direction='left' cycle={cycleImages} label='Meeting Spaces'/>
            <VoteButton direction='right' cycle={cycleImages} label='Workstations'/>
            <VoteButton direction='up' cycle={cycleImages} label='Private Spaces'/>
            <VoteButton direction='down' cycle={cycleImages} label='Private Office'/>
            
            <div className="min-h-screen min-w-screen">
                <div className="fixed h-full w-full flex items-center justify-center">
                    <div className={loading ? '' : 'shadow-2xl drop-shadow-xl shadow-black/50 '}>
                        {loading ? <CircularProgress color="secondary"/> : <img src={image} alt={'pic'}/>}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
