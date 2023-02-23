import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight, AiFillCaretUp, AiOutlineArrowDown } from "react-icons/ai";
import { useAppSelector } from "../utilities/hooks";


export default function VoteButton({ direction, cycle, label, loading }: { direction: "left" | "right" | "up" | "down", cycle: (tag: string) => void, label: string, loading: boolean } ) {
    const count = useAppSelector((state) => state.image);
    const loadingRef = useRef({});
    loadingRef.current = loading;

    useEffect(() => {
        switch (direction) {
            case "left":
                var direction_keycode:string = 'ArrowLeft';
                break;
            case "right":
                var direction_keycode:string = 'ArrowRight';
                break;
            case "up":
                var direction_keycode:string = 'ArrowUp';
                break;
            case "down":
                var direction_keycode:string = 'ArrowDown';
                break;
        }

        console.log('a')
        document.addEventListener("keyup", (e) => {
            if (e.key === direction_keycode && !loadingRef.current) {
                clickHandler();
            }
        });

        // return function that removes the event listener
        return () => {
            document.removeEventListener("keyup", (e) => {
                if (e.key === direction_keycode && !loadingRef.current) {
                    clickHandler();
                }
            });
        } 
    }, []);



    // animation to turn text color green for one second then back to white
    function textColorAnimation() {
        let directions: string[] = ['left', 'right', 'up', 'down']
        // remove direction from directions
        directions.splice(directions.indexOf(direction), 1)

        let duration: number = 500;

        //animejs animation to translate image div up
        switch(direction) {
            case "left":
                anime({
                    targets: '#image',
                    translateX: '-100rem',
                    duration: duration,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        anime({
                            targets: '#image',
                            translateX: '0rem',
                            duration: duration,
                            easing: 'easeInOutQuad',
                        });
                    }
                })
                break;
            case "right":
                anime({
                    targets: '#image',
                    translateX: '100rem',
                    duration: duration,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        anime({
                            targets: '#image',
                            translateX: '0rem',
                            duration: duration,
                            easing: 'easeInOutQuad',
                        });
                    }
                })
                break;
            case "up":
                anime({
                    targets: '#image',
                    translateY: '-100rem',
                    duration: duration,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        anime({
                            targets: '#image',
                            translateY: '0rem',
                            duration: duration,
                            easing: 'easeInOutQuad',
                        });
                    }
                })
                break;
            case "down":
                anime({
                    targets: '#image',
                    translateY: '100rem',
                    duration: duration,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        anime({
                            targets: '#image',
                            translateY: '0rem',
                            duration: duration,
                            easing: 'easeInOutQuad',
                        });
                    }
                })
                break;  
            }
        // animejs animation to translate image div down
        // anime({
        //     targets: '#image',
        //     translateY: '0rem',
        //     duration: duration,
        //     delay: duration*10,
        //     easing: 'easeInOutQuad'
        // })
        
        
        // animejs animation to fade opacity to 0 then back to 1 for 1 second
        // anime({
        //     targets: `#${direction}`,
        //     // opacity: [1, 0, 1],
        //     outlineColor: ["rgb(41, 37, 36)", "rgb(34, 197, 94)", "rgb(41, 37, 36)"],
        //     color: ['rgb(255, 255, 255)', 'rgb(34, 197, 94)', 'rgb(255, 255, 255)'],
        //     duration: duration,
        //     // easing: 'easeInOutQuad',
        // });
        // anime({
        //     targets: `#${directions[0]}, #${directions[1]}, #${directions[2]}`,
        //     // opacity: [1, 0, 1],
        //     outlineColor: ["rgb(41, 37, 36)", "#b91c1c", "rgb(41, 37, 36)"],
        //     color: ['rgb(255, 255, 255)', '#b91c1c', 'rgb(255, 255, 255)'],
        //     duration: duration,
        //     // easing: 'easeInOutQuad',
        // });

        // stone 800 #292524
        // green 500 #22c55e
        // red 700 #b91c1c
        
    }


    //#region caret switch statement
    let direction_class: string = 'text-text-main flex justify-center items-center text-3xl 3xl:text-5xl drop-shadow-2xl absolute ';
    let icon: React.ReactNode = null;
    switch (direction) {
        case "left":
            direction_class += 'inset-y-20'
            icon = <div className="flex flex-row ml-10 3xl:ml-20 "><div className="relative"><AiFillCaretLeft className="text-4xl p-2 m-4 border-2 border-black rounded" /><div className="blur-xl absolute inset-0 -z-5 bg-yellow-500/20"></div></div><span className="text-xl font-medium mt-4 ml-1">{label}</span></div>
            break;
        case "right":
            direction_class += 'right-0 inset-y-20'
            icon = <div className="flex flex-row mr-10 3xl:mr-20"><span className="text-xl font-medium mt-4 mr-1">{label}</span><div className="relative"><AiFillCaretRight className="text-4xl p-2 m-4 border-2 border-black rounded" /><div className="blur-xl absolute inset-0 -z-5 bg-yellow-500/20"></div></div></div>
            break;
        case "up":
            direction_class += 'top-0 inset-x-64'
            icon = <div className="flex justify-center items-center flex-col mt-10 3xl:mt-20"><div className="relative"><AiFillCaretUp className="text-4xl p-2 m-4 border-2 border-black rounded" /><div className="blur-xl absolute inset-0 -z-5 bg-yellow-500/20"></div></div><span className="text-xl font-medium">{label}</span></div>
            break;
        case "down":
            direction_class += 'bottom-8 inset-x-40'
            icon = <div className="flex justify-center items-center flex-col 3xl:mb-20"><span className="text-xl font-medium">{label}</span><div className="relative"><AiFillCaretDown className="text-4xl p-2 m-4 border-2 border-black rounded" /><div className="blur-xl absolute inset-0 -z-5 bg-yellow-500/20"></div></div></div>
            break;
    }
    //#endregion

    function clickHandler() {
        textColorAnimation();
        cycle(label);
        console.log(`clicked ${direction}`)
    }

    return (
        <button className={direction_class} id={direction} onClick={clickHandler}>
            {icon}
        </button>
    )

}

