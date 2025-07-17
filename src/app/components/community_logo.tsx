import React from 'react';
import { path } from './svg_paths/logo';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Community_logo() {
  const isMobile=useMediaQuery('(min-width:768px)')
  return (
    <svg
      width={30}
      height={30}
      viewBox="50 50 400 400" 
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fill={isMobile?'#fef9c3':'black'}
      stroke={isMobile?'green':"white"}
      strokeWidth={5}
      className='border-none'
    >
      {path.map((d, idx) => (
        <path d={d} key={idx}  />
      ))}
    </svg>
  );
}
