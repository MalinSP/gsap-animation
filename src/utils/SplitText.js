import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function useArraysRef() {
  const refs = useRef([])
  refs.current = []

  return [refs, ref => ref && refs.current.push(ref)]
}

export function SplitText({ children }) {
  const [refs, setRef] = useArraysRef()
  const triggerRef = useRef()
  // console.log(children)

  useEffect(() => {
    const splitTextTween = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",

        toggleActions: "play none none reverse",
      },
    })
    splitTextTween.fromTo(
      refs.current,
      {
        autoAlpha: 0,
        display: "inline-block",
        y: "100%",
      },
      {
        autoAlpha: 1,
        delay: 0.2,
        display: "inline-block",
        duration: 1.5,
        ease: "back.inOut",
        stagger: 0.05,
        y: "0%",
      }
    )
  }, [refs])
  let words = children.toString().split(" ")
  // console.log(words)
  return words.map((word, i) => {
    return (
      <span
        ref={triggerRef}
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <span
          ref={setRef}
          style={{ display: "inline-change", willChange: "transform" }}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </span>
      </span>
    )
  })
}
