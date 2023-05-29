import React, { useState } from "react";
import '../scss/style.css'
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

// Интерфейс Image, описывает структуру объекта изображения
interface Image {
  id: number;
  url: string;
  alt: string;
}

// Массив images, содержащий объекты изображений
const images: Image[] = [
  {
    id: 1,
    url: img1,
    alt: "Image 1",
  },
  {
    id: 2,
    url: img2,
    alt: "Image 2",
  },
  {
    id: 3,
    url: img3,
    alt: "Image 3",
  },
];

const Carousel: React.FC = () => {

// Состояние для хранения текущего индекса изображения
  const [imgIndex, setimgIndex] = useState(0);

// Обработчик для перехода к предыдущему изображению
  const previousImage = (): void => {
    setimgIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

// Обработчик для перехода к следующему изображению
  const nextImage = (): void => {
    setimgIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
        <div className="carousel__wrapper">
            <img className="carousel__img"
                src={images[imgIndex].url}
                alt={images[imgIndex].alt}
            />
            <div className="carousel__btn-box">
                <button className="carousel__btn" onClick={previousImage}>Прошлая</button>
                <button className="carousel__btn" onClick={nextImage}>Следующая</button>
            </div>
        </div>
    </div>
  );
};

export default Carousel;