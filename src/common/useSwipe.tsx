import { TouchEvent, useState } from 'react'

interface SwipeProps {
    data: string | number;
    action: (a: string | number) => void; 
}

export const useSwipe = ({ action, data }: SwipeProps) =>{
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    function handleTouchStart(e: TouchEvent) {setTouchStart(e.targetTouches[0].clientX);}
    function handleTouchMove(e: TouchEvent) {setTouchEnd(e.targetTouches[0].clientX);}
    function handleTouchEnd() {
        if (touchStart - touchEnd > 180) {}// do your stuff here for left swipe 
        if (touchStart - touchEnd < -180) { // do your stuff here for right swipe
            action( data )
        }
    }

    return [handleTouchStart, handleTouchMove, handleTouchEnd]
}
