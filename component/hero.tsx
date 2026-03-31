"use client";
import { useEffect, useRef } from "react";

const hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Mac Book Pro</h1>
        <img src="images/title.png" alt="Macbook Title" />
      </div>

      <video
        ref={videoRef}
        src="/video/hero.mp4"
        autoPlay
        muted
        playsInline
      ></video>

      <button>Buy</button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default hero;
