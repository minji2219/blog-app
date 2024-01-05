import { useState } from "react";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(1);
  const IMAGE_1_URL =
    "https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDVfMTgw/MDAxNjU5NjY0NjM5MzE4.wxauAakX-tXEB-yjupWawKLIZxvJXMIr6O1OlBuvAjMg.jMuIM5JIr41-AIdzOnPffYN-T7r5RvW4m7Equclrq6Yg.PNG.sscampus/%EA%B2%BD%EA%B8%B0%EC%83%81%EC%83%81%EC%BA%A0%ED%8D%BC%EC%8A%A4_Summer_%EA%B0%80%EB%A1%9C%ED%98%95.png?type=w800";
  const IMAGE_2_URL =
    "https://cdn.imweb.me/upload/S20200130a3018554a5004/e35673bb291fd.png";
  const IMAGE_3_URL =
    "https://img.freepik.com/premium-photo/wonderful-scenery-background-image_792335-10.jpg";

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          <input
            type="radio"
            name="radio-buttons"
            id="img-1"
            checked={activeImage === 1}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 1" src={IMAGE_1_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-prev"
              >
                <span>&lt;</span>
              </label>
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-next"
              >
                <span>&gt;</span>
              </label>
            </div>
          </li>

          <input
            type="radio"
            name="radio-buttons"
            id="img-2"
            checked={activeImage === 2}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 2" src={IMAGE_2_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-prev"
              >
                <span>&lt;</span>
              </label>
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-next"
              >
                <span>&gt;</span>
              </label>
            </div>
          </li>

          <input
            type="radio"
            name="radio-buttons"
            id="img-3"
            checked={activeImage === 3}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 3" src={IMAGE_3_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-prev"
              >
                <span>&lt;</span>
              </label>
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-next"
              >
                <span>&gt;</span>
              </label>
            </div>
          </li>
          <div className="carousel__dots">
            <label
              onClick={() => setActiveImage(1)}
              className="carousel__dot"
              id="img-dot-1"
            ></label>
            <label
              onClick={() => setActiveImage(2)}
              className="carousel__dot"
              id="img-dot-2"
            ></label>
            <label
              onClick={() => setActiveImage(3)}
              className="carousel__dot"
              id="img-dot-3"
            ></label>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
