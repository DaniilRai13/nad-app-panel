import React from 'react';
import cls from './ImageCard.module.css'

const ImageCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.remove__btn} data-name="">&times;</div>
      <div className={cls.card__info}>
        <span className={cls.card__info__name}>Name</span>
      </div>
      <img className={cls.card__img} src='' alt="" />
    </div>
  )
}

export default ImageCard;