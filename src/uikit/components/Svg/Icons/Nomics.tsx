import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 200 200" {...props}>
      <path
        d="M91.3,44.9C90.4,20,69.5,0.5,44.5,1.4C20.4,2.2,1.2,22,1,46.2v107.7C1,178.8,21.2,199,46.1,199
		c12,0,23.5-4.8,32-13.2l30.7-30.7l0,0c1.3,24.9,22.5,44.1,47.4,42.8c23.6-1.2,42.3-20.4,42.9-44.1V46.2C199,21.2,178.8,1,153.9,1
		c-12,0-23.5,4.8-32,13.2L91.3,44.9"
      />
      <ellipse fill="#4B8077" cx="100" cy="100" rx="45.2" ry="45.2" />
    </Svg>
  )
}

export default Icon
