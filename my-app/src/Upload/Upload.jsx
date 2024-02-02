import React, { createRef, useState } from 'react';
import cls from './Upload.module.css'
import ImageCard from '../Works/Work/ImageCard';
import { sendToServer } from '../utils';

const Upload = () => {
  const inputRef = createRef()

  const [files, setFiles] = useState([])

  function inputClick() {
    inputRef.current.click()
  }

  async function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['BT', 'KB', 'MiB', 'GB', 'TB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  const inputChangeHandler = event => {
    if (!event.target.files.length) {
      return
    }

    let choosingFiles = Array.from(event.target.files)

    choosingFiles.forEach(file => {
      if (!file.type.match('image') || files.some(obj => obj.fileInfo.name === file.name)) {
        return
      }

      const reader = new FileReader()

      reader.onload = async (e) => {
        // files.push(file)
        let compressedImageDataUrl
        const src = e.target.result
        console.log(file)
        let image = new Image()
        image.src = src

        image.onload = async () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          // Устанавливаем ширину и высоту canvas'а
          let width = image.width;
          let height = image.height;

          const WIDTH = width / 2;
          const HEIGHT = height / 2;

          // Если изображение превышает максимальные размеры, изменяем их
          if (width > WIDTH || height > HEIGHT) {
            const ratio = Math.min(WIDTH / width, HEIGHT / height);
            width *= ratio;
            height *= ratio;
          }

          // Устанавливаем размеры canvas'а
          canvas.width = width;
          canvas.height = height;

          // Сжимаем изображение на canvas'е
          ctx.drawImage(image, 0, 0, width, height);

          // Получаем сжатое изображение в формате data URL
          compressedImageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
        
          console.log(files)

          let base64String = btoa(compressedImageDataUrl);
          // Декодирование строки base64
          let binaryData = atob(base64String);
          // Вычисление веса декодированных данных
          let weightInBytes = binaryData.length;

          const size = await formatBytes(weightInBytes)

          setFiles([...files, {
            fileInfo: {
              size,
              name: file.name
            },
            base64: compressedImageDataUrl
          }])
          
        }

      }

      reader.readAsDataURL(file)

    })
  }
  const send = async ()=>{
    try{
      await sendToServer(files)
      setFiles([])
    }catch(err){

    }
  }
  return (
    <div className={cls.upload}>
      <input onChange={inputChangeHandler} ref={inputRef} className={cls.upload__input} type="file" accept="image/*"></input>
      <div className={cls.upload__btns}>
        <button
          className={`${cls.open__btn} btn`}
          onClick={inputClick}
        >Load images</button>
        <button
          className={`${cls.send__btn} btn`}
          onClick={()=>send()}
        >
          Send to server
        </button>
      </div>
      <div className={`${cls.imgs__container}`}>{files.map(obj => <ImageCard file={obj} />)}</div>
    </div>
  )
}

export default Upload;