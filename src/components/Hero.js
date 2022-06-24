import React from "react"
import logo from "../assets/logo.svg"
import styled from "styled-components"
import { ParallaxHeroSection } from "./index"

const Hero = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <h1>Back to smooth and firm skin</h1>
      <ParallaxHeroSection />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
  h1 {
    color: black;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    text-align: center;
    text-transform: uppercase;
    padding-top: 4rem;
  }
`

export default Hero
