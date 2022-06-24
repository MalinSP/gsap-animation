import React from "react"
import styled from "styled-components"

const ContentSection = ({ title, text }) => {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <h2>{title}</h2>
        <h3>{text}</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content-wrapper {
    max-width: 1200px;
  }
  h2 {
    font-size: 5rem;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -0.015rem;
    color: #acacac;
  }
  h3 {
    font-size: 5rem;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -0.015rem;
    color: #080f0f;
  }
`

export default ContentSection
