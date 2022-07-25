import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ImageComponent from './ImageComponent';


export default function ImageList(props: {images: {id: number, url: string}[]}) {
    
    // debounce function that only takes first input
    function debounce(func: any, wait: number, immediate: boolean) {
        var timeout: any;
        return function () {
            // @ts-ignore
            var context= this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    return (    
        <div id="image" className='min-h-screen min-w-screen flex justify-center items-center'>
            <div className='relative outline outline-8 outline-white shadow-2xl drop-shadow-xl shadow-black'>
                <ImageComponent src='https://picsum.photos/id/372/600/280' alt="picsum" className='opacity-0'/>
                {props.images.map((image, index) => {
                    return <ImageComponent src={image.url} alt="picsum" className='absolute inset-0' />;})}

            </div>
        </div>
    );
}