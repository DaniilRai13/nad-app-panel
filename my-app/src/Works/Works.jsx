import React from 'react';
import cls from './Works.module.css'
import ImageCard from './Work/ImageCard';

const Works = () => {
  return (
    <div className={cls.work}>
      <ImageCard />
    </div>
  )
}

export default Works;