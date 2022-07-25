// react component with state that holds image url
// Language: typescript

import { forwardRef, useImperativeHandle, useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import useSWR from 'swr';

export default function ImageComponent( {url, idnum}: {url: string, idnum: number} ) {
    return (
        
                <img src={url} alt="picsum" className=''/>
    )
}

// const ImageComponent = forwardRef((props: {pkey: number}, ref) => {
    


//     useImperativeHandle(ref, () => ({
//         pushImage(tag: string) {
//             // push new tag to database
//             axios.post('/api/PushNewTag', {idnum: imageId, url: imageUrl, tag: tag}).catch(err => {
//                 console.log(err);
//             });

//         }
//     }))
        
//     return (
        
//     );
// })

// export default ImageComponent;
