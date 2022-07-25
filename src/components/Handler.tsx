import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import useSWR, { mutate, useSWRConfig }  from "swr"; 
import ImageComponent from "./ImageComponent";
import ImageList from "./ImageFactory";
import VoteButton from "./VoteButton";

export default function Handler() {
    const [image, setImage] = useState<string>('');
    const setValue = (value: string) => {setImage(value)};
    const [loading, setLoading] = useState(true);
    // let image: {id?: number, url?: string} = {}
    // function setImage({id, url}: {id?: number, url?: string}){
    //     image = {id, url};
    // }
    
    useEffect(() => {
        pullImage();
    }, []);

    useEffect(() => {
    }, [image]);
    
    async function pullImage() {
        const { data }: {data?: any} = await axios.get(`/api/PullUntagged`);
        if (data) {
            setValue(data[0].url);
        }
    }
    

    async function cycleImages(tag: string) {
        // console.log(image.id, image.url)
        // console.log(image)
        await axios.post('/api/PushNewTag', {idnum: 12, url: image, tag: tag}).catch(err => {
            // console.log(err);
        })
        setLoading(true);
        await pullImage();
    }

    return (
        <div className="relative" id="main">
            <VoteButton direction='left' cycle={cycleImages} label='Meeting Spaces'/>
            <VoteButton direction='right' cycle={cycleImages} label='Workstations'/>
            <VoteButton direction='up' cycle={cycleImages} label='Private Spaces'/>
            <VoteButton direction='down' cycle={cycleImages} label='Private Office'/>
            <div id="image" className='min-h-screen min-w-screen flex justify-center items-center'>
                <div className={loading ? '' : 'relative shadow-2xl drop-shadow-xl shadow-blac'}>
                    {/* {!data ? <div>Loading...</div> : <ImageComponent url={image.url} idnum={image.id}/>} */}
                    {
                        loading ? <div className="flex justify-center text-center items-center">Loading...</div> : null
                    }
                    <img src={image} alt={'pic'} onLoad={() => setLoading(false)} className={loading ? 'opacity-0' : 'opacity-1'}/>
                </div>
            </div>
        </div>
    )
}
// interface IProps {
//     initsize: number;
// }

// interface IState {
//     images: { id: number, url: string }[];
// }

// export default class Handler extends React.Component<IProps, IState> {
//     constructor(props: IProps) {
//         super(props);
    
//         this.state = {
//             images: []
//         }

//         this.cycleImages = this.cycleImages.bind(this);
//     }

//     // cycleImages(tag: string) {
//     //     axios.get('/api/PullUntagged').then(res => {
//     //         let image: {id: number, url:string}[] = this.state.images;
//     //         image.push({id: res.data[0].id, url: res.data[0].url});
//     //         this.setState({ images: image }, () => {
//     //             // console.log(this.state.images)   
//     //         });
//     //     });

//     //     axios.post('/api/PushNewTag', {id: this.state.images[this.state.images.length-1].id, url: this.state.images[this.state.images.length-1].url, tag: tag}).then(
//     //         // remove first image from images
//     //         // @ts-ignore
//     //         this.setState({ images: this.state.images.filter((image, index) => index !== 0) }, () => {
//     //             console.log(this.state.images)
//     //         })
//     //     );

//     // }

//     cycleImages(tag: string) {

//     }

//     // componentDidMount() {
//     //     for (let i = 0; i < this.props.initsize; i++) {
//     //         axios.get('/api/PullUntagged').then(res => {
//     //             this.setState({ images: [{id: res.data[0].id, url: res.data[0].url}, ...this.state.images] }, () => {
//     //                 // console.log(this.state.images)
//     //             });
//     //         })
//     //     }
//     // }

//     render() {
//         return (
//         <div className="relative" id="main">
//             <VoteButton direction='left' cycle={this.cycleImages} label='Meeting Spaces'/>
//             <VoteButton direction='right' cycle={this.cycleImages} label='Workstations'/>
//             <VoteButton direction='up' cycle={this.cycleImages} label='Private Spaces'/>
//             <VoteButton direction='down' cycle={this.cycleImages} label='Private Office'/>
//             {/* <ImageList images={this.state.images}/> */}
//             <ImageComponent />
//         </div>
//         )
//     }
// }