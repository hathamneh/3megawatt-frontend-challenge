import React from 'react'
import styled from '@emotion/styled'

const BgEffectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
const BgEffectClipped = styled.div`
  background-image: linear-gradient(
    -45deg,
    #2196f3 0%,
    #2196f3 33%,
    #00bfa5 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;
  clip-path: url(#bgEffectClip);
`

const BgEffect: React.FC = () => (
  <BgEffectContainer>
    <svg height={0} viewBox="0 0 1365 350" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="bgEffectClip" clipPathUnits="objectBoundingBox"
                  transform="scale(0.000732600733 0.00285714286)">
          <path
            id="svg_4"
            d="m1366,192.4375l0,-193.4375l-1367,1l1,283c-1,0.453376 110.389985,70.034471 255,59c144.610015,-11.034471 389.458249,-206.5625 626,-206.5625c236.541751,0 437.900111,115 485,57z"
            fill="#000"
          />
        </clipPath>
      </defs>
    </svg>
    <BgEffectClipped />
  </BgEffectContainer>
)

export default BgEffect
