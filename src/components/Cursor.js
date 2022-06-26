import React, { useState, useEffect } from "react"
import styled from "styled-components"

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hover, setHover] = useState(false)

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  const onMouseEnter = () => {
    setHidden(false)
  }
  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseDown = () => {
    setClicked(true)
  }
  const onMouseUp = () => {
    setClicked(false)
  }
  const getBackgroundColor = () => {
    if (clicked) {
      return "#ffffff"
    } else if (hover) {
      return "#ffffff"
    } else {
      return "transparent"
    }
  }
  const setScaleHover = () => {
    if (clicked) {
      return "translate(-50%, -50%) scale(0.9)"
    } else if (hover) {
      return "translate(-50%, -50%) scale(1.5)"
    } else {
      return "translate(-50%, -50%) scale(1)"
    }
  }
  const handleHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setHover(true))
      el.addEventListener("mouseout", () => setHover(false))
    })
  }
  useEffect(() => {
    handleHoverEvents()
    document.addEventListener("mousemove", onMouseMove)
    document.body.addEventListener("mouseenter", onMouseEnter)
    document.body.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.body.removeEventListener("mouseenter", onMouseEnter)
      document.body.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [])

  if (typeof navigator !== "undefined" && isMobile()) return null
  return (
    <Wrapper
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
        backgroundColor: getBackgroundColor(),
        transform: setScaleHover(),
      }}
    ></Wrapper>
  )
}

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #ffffff;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
  mix-blend-mode: difference;
  transition-property: opacity, background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: ease;
`

export default Cursor
