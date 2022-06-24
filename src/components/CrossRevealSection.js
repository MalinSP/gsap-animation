import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CrossRevealSection = ({
  face,
  landscape,
  name,
  job,
  sentenceOne,
  sentenceTwo,
  crossreveal,
}) => {
  const containerRef = useRef()
  const imageRef = useRef()
  const triggerRef = useRef()
  const personRef = useRef()
  const quoteRef = useRef()

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: () => "+=" + triggerRef.current.offsetWidth,
        scrub: true,
        pin: true,
        // markers: true,
        anticipatePin: 1,
      },
    })
    crossRevealTween
      .fromTo(
        containerRef.current,
        { [crossreveal]: 100, x: 0 },
        { [crossreveal]: 0 }
      )
      .fromTo(
        imageRef.current,
        { [crossreveal]: -100, x: 0 },
        { [crossreveal]: 0 },
        0
      )
      .from(personRef.current, { autoAlpha: 0 }, 0)
      .from(quoteRef.current, { autoAlpha: 0, delay: 0.25 }, 0)
  }, [crossreveal])

  return (
    <Wrapper ref={triggerRef}>
      <div className="cross-reveal-image">
        <img src={face} alt="face" />
        <div className="person-content" ref={personRef}>
          <h3 className="person-name">{name}</h3>
          <p className="person-job">{job}</p>
        </div>
      </div>
      <div className="cross-reveal-image after-image" ref={containerRef}>
        <img src={landscape} alt="landscape" ref={imageRef} />
      </div>
      <div className="landscape-wrapper">
        <p className="quote-sentence">
          {sentenceOne} <br /> {sentenceTwo}
        </p>
        <p className="author-name">{name}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  padding-bottom: 56.25%;
  .cross-reveal-image {
    width: 100%;
    height: 100%;
  }
  .after-image {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0);
  }
  .after-image img {
    transform: translate(-100%, 0);
  }
  .cross-reveal-image img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .person-content {
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;
    .person-name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }
    .person-job {
      font-weight: 400;
      line-height: 1.3;
      font-size: 17px;
      letter-spacing: -0.022rem;
    }
  }
  .landscape-wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 00;
    width: 90%;
    .quote-sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: white;
    }
    .author-name {
      line-height: 1.15;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0;
      color: white;
      padding-top: 20px;
    }
  }
`

export default CrossRevealSection
