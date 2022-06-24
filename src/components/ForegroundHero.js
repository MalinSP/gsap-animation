import React, { forwardRef, useRef, useImperativeHandle } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
`

const ForegroundHero = forwardRef((props, ref) => {
  const el = useRef()

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y })
        },
      }
    },
    []
  )

  return (
    <Wrapper ref={el}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 625">
        <g id="LEAVE1_FORGROUND">
          <path
            d="M484.492,428.183c-5.389,4.467-42.321,24.425-44.306,25.577s-8.41,4.852-11.188,2.3.934-4.864.934-4.864l6.311-3.649c28.522-19.586,40.658-35.332,40.658-35.332-2.138-2.343-11.419-18.959-11.422-18.957-4.426,2.563-9.351,6.8-14.8,5.564a3.174,3.174,0,0,1-1.773-.9c-.98-1.154-.259-2.915.566-4.185,3.445-5.3,7.843-9.548,10.608-15.366-1.485-3.828-8.091-39.16-8.091-39.16-3.61,3.188-53.42,22.774-53.42,22.774-1.7,8.513,5.312,34.91,5.312,34.91,1.5,8.718-4.467,3.61-4.467,3.61-12.981-12.341-16.079-32.554-16.079-32.554l-8.821,5.094c-1.7,9.589,2.548,20.649,3.828,27.255s-3.4,4.25-3.4,4.25c-10.856-4.685-14.043-22.134-14.043-22.134a59.614,59.614,0,0,0-11.074,9.153c-.2,24.054,14.057,43.846,16.4,46.611s10,16.181-5.12,7.245-26.82-31.3-26.82-31.3c-10.638,14.7-24.476,59.6,2.343,77.052s54.919,1.063,54.919,1.063c21.288,27.036,56.582,32.413,65.556,32.567,20.009.371,39.8-7.873,39.6-35.973C496.462,456.18,484.492,428.183,484.492,428.183ZM354.083,475.215s-2.765,8.091-12.558,0-6.388-18.51-6.388-18.51c2.765,7.015,9.576,9.357,14.9,12.135S354.083,475.215,354.083,475.215Zm38.738-50.655c-.64,1.92-3.2,4.263-8.936,0s-4.48-11.073-4.48-11.073c0-3.393,1.664-2.292,3.456-.628,2.369,2.189,4.429,2.548,7.835,4.673S393.461,422.64,392.821,424.56Z"
            fill="#080F0F"
          />
          <path
            d="M379.286,567.642s13.535-143.082,68.875-218.856"
            fill="none"
            stroke="#00EFEB"
            strokeMiterlimit="10"
            strokeWidth="1.28"
          />
          <path
            d="M375.21,594.734s7.181-59.921,16.5-102.456"
            fill="none"
            stroke="#080F0F"
            strokeMiterlimit="10"
            strokeWidth="1.28"
          />
          <path
            d="M470.3,470.324c-.638,0-28.5,22.456-73.208,4.949"
            fill="none"
            stroke="#00EFEB"
            strokeMiterlimit="10"
            strokeWidth="1.28"
          />
          <path
            d="M470.3,499.485s-33.073,8.045-44.739-17.689"
            fill="none"
            stroke="#00EFEB"
            strokeMiterlimit="10"
            strokeWidth="1.28"
          />
        </g>
        <g id="LEAVE2_FORGROUND">
          <path
            d="M612.526,495.413c-24.742-2.974-53.212-2.582-67.876-27.146-4.549-7.621-5.731-17.812-.877-25.242,9.4-14.382,32.93-14.742,47.155-9.263,7.571,2.917,17.586,6.46,25.4,8.657,7.487,2.108,17.444,5.4,23.788-1.357,5.59-5.951-1.479-12.224-6.286-15.4-25.932-17.148-56.386-29.265-79.816-49.831-7.624-6.691-14.957-15.308-14.848-25.451.082-7.552,4.483-14.6,10.416-19.274,24.523-19.311,51.526-2.472,70.153,16.017,11.327,11.243,19.2,25.163,24.066,40.28a28.959,28.959,0,0,0,5.09-13.607c1.061-11.008-9.587-19.559-11.21-30.332-1.038-6.887.307-14.289,4.529-19.828,12.622-16.559,31.407-1.957,40,10.78A62.371,62.371,0,0,1,692.5,362.935c1.074,11.664-3.1,22.654-3.026,34.234.089,13.136,11.694,9.966,18.485,4.081,6.657-5.768,12.245-16.1,22.171-16.029,11.091.081,22.406,11.681,26.208,21.2,6.868,17.2-4.045,40.432-17.473,52.418-6.349,5.668-14.9,10.284-21.178,22.236-2.332,4.439-5.579,13.476-.2,16.981,6.155,4.007,16.952-5.934,21.278-9.746,18.023-13.3,26.547,8.646,26.547,8.646,9.321,25.939-21.957,47.221-21.957,47.221-25.985,25.273-19.288,36.58-19.288,36.58-4.525-6.651-25.272-21.629-78.477-21.63-15.388,0-35.075-3.4-46.968-14.251-15.09-13.764-6.942-39.959,15.042-37.278,6.355.374,15.75,3.794,21.776,1.683a4.509,4.509,0,0,0,3.19-3.7,5.22,5.22,0,0,0-1.422-3.473C632.208,496.047,619.7,496.275,612.526,495.413Z"
            fill="#080F0F"
          />
          <g id="LEAVE3_FORGROUND">
            <path
              d="M934.625,362.575a90.586,90.586,0,0,1-18.413,27.585c-3.567,3.55-8.152,6.992-13.127,6.234-4.255-.648-7.577-4.429-8.622-8.6s-.145-8.626,1.494-12.605a35.147,35.147,0,0,1,34.952-21.7,12.948,12.948,0,0,1,8.227,2.791A17.518,17.518,0,0,0,934.625,362.575Z"
              fill="#080F0F"
            />
            <path
              d="M943.648,362.575A90.583,90.583,0,0,0,962.06,390.16c3.568,3.55,8.153,6.992,13.128,6.234,4.255-.648,7.577-4.429,8.622-8.6s.145-8.626-1.494-12.605a35.148,35.148,0,0,0-34.953-21.7,12.95,12.95,0,0,0-8.227,2.791A17.513,17.513,0,0,1,943.648,362.575Z"
              fill="#080F0F"
            />
            <path
              d="M939.136,307.469s-25.883-27.055-46.572-27.585-45.091,7.957-45.357,29.441c-.218,17.642,15.842,31.942,32.756,33.015,11.981.761,25.4-4.65,35.7-10.5a62.953,62.953,0,0,0,13.291-9.92C930.26,320.63,940.627,309.028,939.136,307.469Z"
              fill="#080F0F"
            />
            <path
              d="M939.136,308.8s33.421,22.281,42.175,27.851c10.808,6.878,24.4,8.561,35.629,1.7a37.12,37.12,0,0,0,17.563-29.21,19.22,19.22,0,0,0-2.029-10.529,21,21,0,0,0-5.324-5.748c-13.057-10.431-31.066-14.04-47.245-10.16-13.413,3.218-28.7,11.043-37.74,21.726A19.008,19.008,0,0,0,939.136,308.8Z"
              fill="#080F0F"
            />
            <path
              d="M939.136,275.64c8.278,1.555,29.339,4.269,49.336-7.427,6.292-3.681,20.932-12.243,23.607-27.851.444-2.591,2.128-12.414-3.448-18.3-8.754-9.245-29.639-2.707-40.848,3.979-21.467,12.8-26.67,37.614-27.851,44.3Z"
              fill="#080F0F"
            />
            <path
              d="M938.982,275.209c-8.108-1.878-27.184-7.513-42.7-24.933-4.07-4.568-18.318-21.022-19.1-44.561-.254-7.678-.693-20.907,7.957-27.321,10.054-7.454,25.681-.731,27.321,0,31.922,14.232,28.32,79.892,28.116,83.022Z"
              fill="#080F0F"
            />
            <line
              x1="939.136"
              y1="274"
              x2="939.136"
              y2="604.72"
              fill="none"
              stroke="#00EFEB"
              strokeMiterlimit="10"
              strokeWidth="2.311"
            />
          </g>
          <path
            d="M584.256,354.532s84.51,55.345,137.82,221"
            fill="none"
            stroke="#00EFEB"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
          <path
            d="M722.245,576.065c4.584,14.633,10.443,34.895,14.459,51.247"
            fill="none"
            stroke="#080F0F"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
          <path
            d="M671.089,381.536s-8.023,39.055-15.856,51.335"
            fill="none"
            stroke="#00EFEB"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
          <path
            d="M623.966,472.076s44.587.475,57.239,5.8"
            fill="none"
            stroke="#00EFEB"
            strokeMiterlimit="10"
            strokeWidth="1.592"
          />
        </g>
      </svg>
    </Wrapper>
  )
})

export default ForegroundHero
