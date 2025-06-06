import React, { useEffect } from 'react'
import gsap from 'gsap'

const MouseElement = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e

      const cursors = document.querySelectorAll(".cursor")

      cursors.forEach((cursor, index) => {
        gsap.to(cursor, {
          x: clientX,
          y: clientY,
          duration: 0.1 + index * 0.1, // slower by index
          ease: "power2.out",
        })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      {
        Array.from({ length: 10 }).map((_, index) => {
          const scale = 1 - index * 0.07 // starts from 1.0 to ~0.3
          return (
            <div
              key={index}
              className="cursor fixed z-[99999] top-0 left-0 w-[20px] h-[20px] rounded-full bg-primary mix-blend-difference pointer-events-none"
              style={{
                transform: `scale(${scale})`
              }}
            ></div>
          )
        })
      }
    </>
  )
}

export default MouseElement
