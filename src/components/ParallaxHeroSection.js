import React, { useRef, useEffect } from "react"
import { ForegroundHero, MidgroundHero, BackgroundHero } from "./index"
import styled from "styled-components"

const ParallaxHeroSection = () => {
  const foregroundHeroRef = useRef()
  const midgroundHeroRef = useRef()
  const backgroundHeroRef = useRef()

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      foregroundHeroRef.current.moveTo(clientX / 4, clientY / 8)
      midgroundHeroRef.current.moveTo(clientX / 8, clientY / 16)
      backgroundHeroRef.current.moveTo(clientX / 12, clientY / 24)
    }

    const onLeave = () => {
      foregroundHeroRef.current.moveTo(0, 0)
    }

    document.addEventListener("mousemove", onMove)
    document.body.addEventListener("mouseleave", onLeave)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.body.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <Wrapper>
      <BackgroundHero ref={backgroundHeroRef} />
      <MidgroundHero ref={midgroundHeroRef} />
      <ForegroundHero ref={foregroundHeroRef} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 30vw;
`

export default ParallaxHeroSection
