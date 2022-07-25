
import { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import anime from "animejs";
import {FiChevronsDown} from 'react-icons/fi';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Loader() {

    useEffect(() => {
        //animejs animation to move main div up 30% after 1500ms
        anime({
            targets: '#text',
            translateY: [150, 0],
            duration: 1500,
            delay: 2500,
            easing: 'easeInOutQuad'
        });

        //animejs animation to fade li items in
        anime({
            targets: '#one',
            opacity: [0,1],
            delay: 4500,
            duration: 1000,
        });
        anime({
            targets: '#two',
            opacity: [0,1],
            delay: 5500,
            duration: 1000,
        });
        anime({
            targets: '#three',
            opacity: [0,1],
            delay: 6500,
            duration: 1000,
        });
        anime({
            targets: '#four',
            opacity: [0,1],
            delay: 7500,
            duration: 1000,
        });
        anime({
            targets: '#five',
            opacity: [0,1],
            delay: 8500,
            duration: 1000,
        });
        anime({
            targets: '#arrow',
            opacity: [0,1],
            delay: 9500,
            duration: 1000,
        });
        //animejs animation to move arrow down 20% after 1500ms and back up on loop
        anime({
            targets: '#arrow',
            translateY: [80, 0],
            duration: 1500,
            // delay: 9500,
            easing: 'easeInOutQuad',
            loop: true,
            direction: 'alternate'
        });

    }, []);


    return (
        <div className="min-w-screen min-h-screen flex flex-col justify-center items-center" id="loader">
                {/* <p className='text-center text-xl text-slate-200 font-serif pb-5 2xl:pb-0'>welcome to</p> */}
                {/* <h1 className='text-center text-9xl text-white font-serif drop-shadow-2xl'>{'< Tagr />'}</h1> */}
                <div className='relative' id="text">
                    <ReactTypingEffect
                        className="blur-sm absolute inset-0 top-2 text-center text-7xl 2xl:text-9xl text-slate-700 font-serif drop-shadow-2xl"
                        text={"< Tagr />"}
                        // staticText={"C:\\PrathikM\\>"}
                        typingDelay={1000}
                        speed={100}
                        // displayTextRenderer={(text, i) => <code>{text}</code>}
                    />
                    <ReactTypingEffect
                        className="text-center text-7xl 2xl:text-9xl text-white font-serif drop-shadow-2xl"
                        text={"< Tagr />"}
                        // staticText={"C:\\PrathikM\\>"}
                        typingDelay={1000}
                        speed={100}
                        // displayTextRenderer={(text, i) => <code>{text}</code>}
                    />
                </div>
                {/* <ul className='blur-md absolute inset-0 top-1 text-center text-md 2xl:text-xl text-slate-800 font-serif pt-10 2xl:pt-20 list-disc max-w-2xl'>
                    <li >{'< Tagr /> is a web-based tool for crowdsourcing data tagging of images'}</li>
                    <li className='pt-5 2xl:pt-10'>For image-based machine learning models, training data sets require large quantities of pre-tagged images, which are often difficult to obtain with few people. <span className='font-bold'>{'< Tagr /> helps solve this inefficiency.'}</span></li>
                    <li className='pt-5 2xl:pt-10'>Untagged images will appear in the center of your screen, simply <span className='underline'>press one of the four arrow keys on your keyboard to tag the image</span>.</li>
                    <li className='pt-5 2xl:pt-10'>See an image that does not correspond to a given label? <span className='underline'>Pressing the SPACE key tags the image as 'misc'.</span></li>
                    <li className='pt-5 2xl:pt-10 list-none'>Click the arrow below to start!</li>
                    
                </ul> */}
                <ul className='text-center text-md 2xl:text-xl text-slate-200 font-serif pt-10 2xl:pt-20 list-disc max-w-2xl'>
                    <li id="one">{'< Tagr /> is a web-based tool for crowdsourcing data tagging of images'}</li>
                    <li id="two" className='pt-5 2xl:pt-10'>For image-based machine learning models, training data sets require large quantities of pre-tagged images, which are often difficult to obtain with few people. <span className='font-bold'>{'< Tagr /> helps solve this inefficiency.'}</span></li>
                    <li id="three" className='pt-5 2xl:pt-10'>Untagged images will appear in the center of your screen, simply <span className='underline'>press one of the four arrow keys on your keyboard to tag the image</span>.</li>
                    <li id="four" className='pt-5 2xl:pt-10'>See an image that does not correspond to a given label? <span className='underline'>Pressing the SPACE key tags the image as 'misc'.</span></li>
                    <li id="five" className='pt-5 2xl:pt-10 list-none'>Click the arrow below to start!</li>
                    <li id="arrow" className='pt-3 2xl:pt-10 list-none text-5xl 2xl:text-7xl text-center flex justify-center'><button><Link 
                    to="main"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}><FiChevronsDown /></Link></button></li>
                </ul>
                
                
                

        </div>
    )
}