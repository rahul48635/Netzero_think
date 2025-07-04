"use client"
import React from "react";

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const Video: React.FC<VideoProps> = ({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => (
  <video
    className={className}
    src={src}
    autoPlay={autoPlay}
    loop={loop}
    muted={muted}
    playsInline={playsInline}
  />
);

export default Video;