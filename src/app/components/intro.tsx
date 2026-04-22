import { useEffect, useState, type JSX } from 'react';


let isShown: boolean = false;

/**
 * Intro component, this only shows at the start of the website
 * @returns React jsx element
 */
export default function Intro(props: {message: string, disable: boolean}): JSX.Element {

    const [isClosed, setClosed] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const [isTyping, setTyping] = useState<boolean>(false);
    const [isCursorHidden, setCursorHidden] = useState<boolean>(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        document.getElementById("root")?.classList.add('overflow-hidden')

        const type = (i = 0) => {
            if (i > props.message.length) {
                setTyping(false);
                return;
            }

            setIndex(i)

            timeout = setTimeout((): void => {
                type(i + 1);
            }, props.disable? 0 : Math.random() * 50 + 45);
        }

        if (props.disable) {
            setIndex(props.message.length)
            type();
            return
        }

        // * 1. Fast Typing effect
        setTimeout((): void => {
            setTyping(true);
            type();
        }, 900)

        // * 2. Enter effect making the cursor dissappear
        setTimeout((): void => setCursorHidden(true), 2900)
        
        // * 3. Closing the curtain container from what i called lmao
        setTimeout((): void => setClosed(true), 3500)

        // * 4 Allows the guest to scroll so the guest can see the hero section
        setTimeout((): void => document.getElementById("root")?.classList.remove('overflow-hidden'), 4000)

        return () => clearTimeout(timeout)
    }, []);

    return (
        <div className={`${isClosed ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]'} transition-[clip-path] duration-2000 ease-in-out w-full h-full top-0 bg-dark-intro overflow-hidden fixed visible justify-center flex z-2`}>
            <p className='tablet:text-2xl text-[1.3rem]  text-purple-coded font-[Fira_Code] mt-52 font-extralight mr-2'>{'>'}</p>
            <p className='tablet:text-2xl text-[1.3rem]  text-white-coded font-[Fira_Code] mt-52 font-extralight'>
                {props.message.split("").map((char, i) => {
                    if (i >= index) {
                        return null;
                    };

                    if (isCursorHidden) console.log("Entered!")

                    const isHello: boolean = i < 5;

                    return (
                        <span key={i} className={`${isHello ? "text-blue-coded" : "text-yellow-coded"}${isCursorHidden ? "" : "/65"}`}>
                            {char}
                        </span>
                    );
                })}
                
                <span className={`${isTyping ? '' : 'animate-blinker'} text-purple-coded ${isCursorHidden ? 'hidden' : ''}`}>_</span>
            </p>
        </div>
    )
}