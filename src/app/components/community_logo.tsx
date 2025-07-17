import React from 'react';
import { path } from './svg_paths/logo';

export default function Community_logo() {
  return (
    <svg
      width={30}
      height={30}
      viewBox="50 50 400 400" // Match the original coordinate system of your paths
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fill='#fef9c3'
      stroke='green'
      strokeWidth={5}
      className='border-2'
    >
      {path.map((d, idx) => (
        <path d={d} key={idx}  />
      ))}
    </svg>
  );
}
