import React, { useState, useEffect } from "react";
import '../scss/style.css';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

interface Image {
    id: number
    url: string
    alt: string
}

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
]

const Carousel: React.FC = () => {

// State для хранения текущего состояния
    const [imgIndex, setimgIndex] = useState(0)

// Предыдущее изображение
    const previousImage = (): void => {
        setimgIndex((prevIndex: number) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

// Следующее изображение
    const nextImage = (): void => {
        setimgIndex((prevIndex: number) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }

// Переключение изображение стрелочками
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent): void => {
          if (event.key === "ArrowLeft") {
            previousImage();
          } else if (event.key === "ArrowRight") {
            nextImage();
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
      }, []);

    return (
        <div className="carousel">
            <div className="carousel__content">
                <img className="carousel__img" src={images[imgIndex].url} alt={images[imgIndex].alt} />
                <div className="carousel__btn-box">
                    <button className="carousel__btn" onClick={previousImage}>Назад</button>
                    <button className="carousel__btn" onClick={nextImage}>Вперед</button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;