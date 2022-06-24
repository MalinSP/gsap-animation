import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { iphoneimages } from "../components/ImageSequence.js"

gsap.registerPlugin(ScrollTrigger)

const VideoSequence = () => {
  const videoTriggerRef = useRef()
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    canvas.width = 851
    canvas.height = 1200

    const frameCount = 71

    const currentFrame = index => {
      return iphoneimages[index]
    }

    const iphone = {
      frame: 0,
    }

    const images = []

    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      // console.log(img.src)
      img.src = currentFrame(i)
      images.push(img)
      // console.log(currentFrame(1))
      // console.log(img)
    }
    // console.log(images)

    gsap.to(iphone, {
      frame: frameCount - 1,
      snap: "frame",
      ScrollTrigger: {
        trigger: videoTriggerRef.current,
        start: "center center",
        end: () => "+=" + videoTriggerRef.current.offsetHeight,
        scrub: 1,
        anticipatePin: true,
        pin: true,
        markers: true,
      },
      onUpdate: () => console.log(iphone.frame),
    })
    // images[0].onload = function () {
    //   context.drawImage(images[0], 0, 0)
    // }
    images[0].onload = updateImage

    function updateImage(index) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(images[iphone.frame], 0, 0)
    }
  }, [])
  return (
    <Wrapper ref={videoTriggerRef}>
      <div className="wrapper">
        <div className="container">
          <div className="text">
            <h1>ZER&Oslash;</h1>
            <h2>
              How big is your <br />
              environmental footprint?
              <br />
              The app for cutting Carbon
              <br /> and Caring for the climate
            </h2>
            <a href="sergeymalin.com" className="download-btn">
              Download
            </a>
          </div>
          <div className="video-image">
            <canvas ref={canvasRef} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: #080f0f;
  width: 100%;
  position: relative;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #080f0f;
    .text {
      flex: 0 0 50%;
      max-width: 50%;
      h1 {
        font-size: 96px;
        line-height: 0.875;
        font-weight: 700;
        letter-spacing: 0.008em;
        color: #ffffff;
      }
      h2 {
        padding-top: 10px;
        font-size: 26px;
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: 0.002em;
        margin-top: 8px;
        color: #ffffff;
      }
      a.download-btn {
        display: inline-block;
        padding: 1em 2em;
        margin: 7em 0.5em 0.5em 0;
        border-radius: 2em;
        text-decoration: none;
        font-weight: 400;
        color: #080f0f;
        background-color: #00efeb;
        text-align: center;
        transition: all 0.6s;
        &:hover {
          background-color: #00bcb9;
        }
      }
    }
    .video-image {
      position: relative;
      flex: 0 0 50%;
      canvas {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 80vw;
        max-height: 80vh;
      }
    }
  }
`
export default VideoSequence
