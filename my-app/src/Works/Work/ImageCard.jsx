import React from 'react';
import cls from './ImageCard.module.css'

const ImageCard = (props) => {
  const file = props.file

  // console.log(props.file.fileInfo)
  return (
    <div className={cls.card}>
      <div className={cls.remove__btn} data-name="">&times;</div>
      <div className={cls.card__info}>
        <span className={cls.card__info__name}>{file.fileInfo.name}</span>
      </div>
      <img className={cls.card__img} src={file.base64} alt="" />
    </div>
  )
}

export default ImageCard;