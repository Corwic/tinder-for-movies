import { TouchEvent, useState } from 'react'

interface SwipeProps {
  data: string | number;
  rightAction: (a: string | number) => void;
  leftAction: (a: string | number) => void;
}

const useSwipe = ({ data = '', rightAction = (f) => f, leftAction = (f) => f }: Partial<SwipeProps>) => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  function handleTouchStart(e: TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX)
  }
  function handleTouchMove(e: TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  function handleTouchEnd() {
    if (touchStart - touchEnd > 180) { // do your stuff here for left swipe
      leftAction(data)
    }
    if (touchStart - touchEnd < -180) { // do your stuff here for right swipe
      rightAction(data)
    }
  }

  return [handleTouchStart, handleTouchMove, handleTouchEnd]
}

export default useSwipe
