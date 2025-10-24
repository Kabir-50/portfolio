'use client'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

const WebScroller = ({ children }: { children: React.ReactNode }) => {
  const reqIdRef = useRef<number>(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
    })

    function raf(time: number) {
      lenis.raf(time)
      reqIdRef.current = requestAnimationFrame(raf)
    }

    reqIdRef.current = requestAnimationFrame(raf)

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current)
      }
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default WebScroller