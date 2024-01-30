import React, {useState} from 'react';
import cls from './Upload.module.css'

const Upload = () => {
  return (
    <div className={cls.upload}>
      <input className={cls.upload__input} type="file" accept="image/*"></input>
      <div className={cls.upload__btns}>
        <button className={`${cls.open__btn} btn`}>Load images</button>
        <button className={`${cls.send__btn} btn`}>Send to server</button>
      </div>
      <div className={`${cls.imgs__container}`}></div>
    </div>
  )
}

export default Upload;