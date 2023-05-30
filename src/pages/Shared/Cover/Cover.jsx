import React from "react";
import { Parallax } from 'react-parallax';


const Cover = ({ img, title, subtitle, height }) => {
  return (

    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div
      className='hero'
      style={{height}}
     
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className=" text-white text-center bg-slate-800 opacity-70 py-20 px-60">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5 uppercase">{subtitle}</p>
        </div>
      </div>
    </div>
</Parallax>
    
  );
};

export default Cover;
