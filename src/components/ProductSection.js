import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import box from "../assets/images/box.png"
import nightCream from "../assets/images/nightCream.png"
import dayCream from "../assets/images/dayCream.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProductSection = () => {
  const textSectionTriggerRef = useRef()
  const productSectionTriggerRef = useRef()
  const productWrapperRef = useRef()
  const boxTextRef = useRef()
  const boxRef = useRef()
  const nightCreamRef = useRef()
  const dayCreamRef = useRef()
  const nightAndDatTextCreamRef = useRef()

  useEffect(() => {
    const scaleDownTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: textSectionTriggerRef.current,
        start: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    })
    scaleDownTween
      .fromTo(
        productWrapperRef.current,
        { scale: 2.8, transformOrigin: "center top" },
        { scale: 2.2, y: "-50%" }
      )
      .to(productWrapperRef.current, { scale: 1, y: 0 })
  }, [])

  useEffect(() => {
    const splitTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: productSectionTriggerRef.current,
        start: "bottom bottom",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        markers: true,
      },
    })
    splitTween
      .to(boxRef.current, {
        x: "-54%",
        duration: 3,
      })
      .to(
        nightCreamRef.current,
        {
          x: "60%",
          duration: 3,
        },
        0
        // "-=3"
      )
      .from(
        boxTextRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        "-=3"
      )
      .from(
        nightAndDatTextCreamRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        "-=3"
      )
      .to(
        boxTextRef.current,
        {
          x: "-30%",
          duration: 3,
        },
        "-=3"
      )
      .to(
        nightAndDatTextCreamRef.current,
        {
          x: "30%",
          duration: 3,
        },
        "-=3"
      )
      .set(dayCreamRef.current, {
        display: "block",
      })
      .from(dayCreamRef.current, {
        autoAlpha: 0,
        transformOrigin: "center center",
        duration: 1,
        scale: 0.75,
      })
  }, [])

  return (
    <>
      <Wrapper ref={textSectionTriggerRef}>
        <p className="text-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          cupiditate consectetur suscipit laborum architecto animi aliquid
          ratione enim, est perferendis eum unde aperiam exercitationem? Iure
          labore a sit? Hic sint molestias ullam cumque velit natus. Itaque
          temporibus repudiandae consectetur, esse dolore ad beatae! Odit a
          corporis laborum enim. Voluptas, odio.
        </p>
      </Wrapper>
      <StyledProductSection ref={productSectionTriggerRef}>
        <div className="product-wrapper" ref={productWrapperRef}>
          <div className="product-text-left" ref={boxTextRef}>
            <p>Clean && Pure</p>
            <p>Cleansing foam</p>
          </div>
          <div className="product-image product1" ref={boxRef}>
            <img className="product1-img-behind" src={box} alt="box" />
          </div>
          <div className="product-image product2" ref={nightCreamRef}>
            <img src={nightCream} alt="night cream" />
          </div>
          <div className="product-image product3 ghost" ref={dayCreamRef}>
            <img src={dayCream} alt="day cream" />
          </div>
          <div className="product-text-right" ref={nightAndDatTextCreamRef}>
            <p>Active</p>
            <p>Day & Night Cream</p>
          </div>
        </div>
      </StyledProductSection>
    </>
  )
}

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #090f0f;
  color: #00efeb;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    width: 60%;
  }
`
const StyledProductSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #080f0f;
  color: #fff;
  .product-wrapper {
    height: 100vh;
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: end;
  }
    .product-image {
      grid-row: 2;
      grid-column: 2 / span 1;
      align-self: end;
      justify-self: end;
      max-width: 100%;
    }
    p {
      font-weight: 600;
      font-size: 20px;
      margin: 0 0 8px 0;
    }
    .product-text-left {
      display: grid;
      grid-column: 1;
      text-align: right;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }
    .product-text-right {
      display: grid;
      grid-column: 3;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }
    .ghost {
      display: none;
      transform: translateX(8%);
    }
    .product1 img {
      width: 60%;
      margin: auto;
    }
    .product2 img {
      width: 40%;
      margin: auto;
    }
    .product3 img {
      width: 40%;
      margin: auto;
    }
  }
`

export default ProductSection
