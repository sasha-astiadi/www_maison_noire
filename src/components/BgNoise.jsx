import React from 'react';

const BgNoise = () => {
  return (
        <div className="absolute inset-0 -z-10 h-full w-full opacity-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/videos/noise2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BgNoise;
