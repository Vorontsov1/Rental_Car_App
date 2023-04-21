import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgDots = ({style, color = '#FFFFFF'}) => (
  <Svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="miter"
    style={style}>
    <Path d="M5.99,12 L6,12" strokeLinecap="round" strokeWidth="2" />
    <Path d="M11.99,12 L12,12" strokeLinecap="round" strokeWidth="2" />
    <Path d="M17.99,12 L18,12" strokeLinecap="round" strokeWidth="2" />
  </Svg>
);

export default SvgDots;
