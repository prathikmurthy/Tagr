
import { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import anime from "animejs";
import {FiChevronsDown} from 'react-icons/fi';
import { Link, animateScroll as scroll } from "react-scroll";
import banner from "../banner.png"
import Image from 'next/image';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function Loader() {

    const [help, setHelp] = useState<boolean>(false);

    const [version, setVersion] = useState<string>('v1.1.0 | 1/19/23')


    // useEffect(() => {
    //     //animejs animation to move main div up 30% after 1500ms
    //     anime({
    //         targets: '#text',
    //         translateY: [150, 0],
    //         duration: 1500,
    //         delay: 2500,
    //         easing: 'easeInOutQuad'
    //     });

    //     //animejs animation to fade li items in
    //     anime({
    //         targets: '#one',
    //         opacity: [0,1],
    //         delay: 4500,
    //         duration: 1000,
    //     });
    //     anime({
    //         targets: '#two',
    //         opacity: [0,1],
    //         delay: 5500,
    //         duration: 1000,
    //     });
    //     anime({
    //         targets: '#three',
    //         opacity: [0,1],
    //         delay: 6500,
    //         duration: 1000,
    //     });
    //     anime({
    //         targets: '#four',
    //         opacity: [0,1],
    //         delay: 7500,
    //         duration: 1000,
    //     });
    //     anime({
    //         targets: '#five',
    //         opacity: [0,1],
    //         delay: 8500,
    //         duration: 1000,
    //     });
    //     anime({
    //         targets: '#arrow',
    //         opacity: [0,1],
    //         delay: 9500,
    //         duration: 1000,
    //     });
    //     //animejs animation to move arrow down 20% after 1500ms and back up on loop
    //     anime({
    //         targets: '#arrow',
    //         translateY: [80, 0],
    //         duration: 1500,
    //         // delay: 9500,
    //         easing: 'easeInOutQuad',
    //         loop: true,
    //         direction: 'alternate'
    //     });

    // }, []);


    return (
        <div className="w-screen h-screen flex flex-row transition-all ease-in-out overflow-clip" id="top">
            
            <div className='absolute top-2 left-2 text-xs text-text-main z-50'>
                {version}
            </div>

            <div className='absolute top-12 right-12 text-4xl p-4 z-50 hover:text-text-accent hover:text-6xl transition-all' onMouseOver={() => setHelp(true)} onMouseOut={() => setHelp(false)}>
                <AiOutlineQuestionCircle />
                

                {
                    help ? <div className='animate-fade-in'>
                        <div className="absolute top-4 right-24 text-sm w-96 text-black">
                            <ul>
                                <li>Untagged images will appear in the center of your screen. <span className='font-bold underline'>Simply click any of the four labels on the screen, or any of the four arrow keys on your keyboard, to "tag" the image with the corresponding label.</span></li>
                                <br />
                                <li>See a misc image that does not correlate to any catagory? <span className='font-bold underline'>Simply click the SPACE key on your keyboard to "tag" the image as misc.</span></li>
                            </ul>
                        </div>
                    </div> : null
                }


            </div>

            <div className=''>
                <Image className="h-screen w-64 overflow-hidden" src={banner} />
            </div>
            <div className={help ? 'blur-md grow transition-all ease-in-out bg-black/5' : 'grow'}>
                <div className='grow h-full flex flex-col justify-evenly items-center text-center pb-48 pt-36'>
                    <div className='mt-64'>
                        <h1 className='text-text-main text-7xl tracking-wider font-serif'>TAGR</h1>
                        <p className='text-sm text-text-main pb-10 font-serif'>by Steelcase</p>
                        <p className='text-lg text-text-accent'>Crowdsourcing data tagging images.</p>
                    </div>
                    <div className='mt-36 font-extralight tracking-wide text-md'>
                        <p>Efficiently data train image-based machine learning models.</p>
                    </div>
                    <div className='mt-36 text-4xl'>
                        <button><Link
                            to="main"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={1000}><FiChevronsDown className='animate-bounce' /></Link></button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}