import anime from "animejs";
import { useEffect } from "react";
import { AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight, AiFillCaretUp } from "react-icons/ai";
// const anime = require('animejs');


export default function VoteButton({ direction, cycle, label }: { direction: "left" | "right" | "up" | "down", cycle: (tag: string) => void, label: string }) {
    
    // useEffect that adds an event listener for a keyboard press that runs once
    useEffect(() => {
        // switch statement with cases for each direction
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
        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.key === direction_keycode) {
                clickHandler();
            }
        });

        // return function that removes the event listener
        return () => {
            document.removeEventListener("keydown", (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (e.key === direction_keycode) {
                    // calls clickhandler and sets timeout to prevent multiple clicks
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

        
        // animejs animation to fade opacity to 0 then back to 1 for 1 second
        anime({
            targets: `#${direction}`,
            // opacity: [1, 0, 1],
            outlineColor: ["rgb(41, 37, 36)", "rgb(34, 197, 94)", "rgb(41, 37, 36)"],
            color: ['rgb(255, 255, 255)', 'rgb(34, 197, 94)', 'rgb(255, 255, 255)'],
            duration: duration,
            easing: 'easeInOutQuad',
        });
        anime({
            targets: `#${directions[0]}, #${directions[1]}, #${directions[2]}`,
            // opacity: [1, 0, 1],
            outlineColor: ["rgb(41, 37, 36)", "#b91c1c", "rgb(41, 37, 36)"],
            color: ['rgb(255, 255, 255)', '#b91c1c', 'rgb(255, 255, 255)'],
            duration: duration,
            easing: 'easeInOutQuad',
        });

        // stone 800 #292524
        // green 500 #22c55e
        // red 700 #b91c1c
        
    }


    //#region caret switch statement
    let direction_class: string = 'text-white flex justify-center items-center text-7xl drop-shadow-2xl absolute ';
    let icon: React.ReactNode = null;
    switch (direction) {
        case "left":
            direction_class += 'inset-y-20'
            icon = <div className="flex flex-row 2xl:ml-20"><AiFillCaretLeft className=""/><span className="text-3xl">{label}</span></div>
            break;
        case "right":
            direction_class += 'right-0 inset-y-20'
            icon = <div className="flex flex-row 2xl:mr-20"><span className="text-3xl">{label}</span><AiFillCaretRight /></div>
            break;
        case "up":
            direction_class += 'top-0 inset-x-64'
            icon = <div className="flex justify-center items-center flex-col 2xl:mt-20"><AiFillCaretUp /><span className="text-3xl">{label}</span></div>
            break;
        case "down":
            direction_class += 'bottom-0 inset-x-40'
            icon = <div className="flex justify-center items-center flex-col 2xl:mb-20"><span className="text-3xl">{label}</span><AiFillCaretDown /></div>
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