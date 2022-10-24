import './styles.css';
import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img
              alt=""
              className="w-full h-[600px] object-center object-cover"
              src="src/resources/images/sl-7-tiger.png"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img
              alt=""
              className="w-full h-[600px] object-center object-cover"
              src="src/resources/images/sl-1-fachadaCotripam.jpeg "
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img
              alt=""
              className="w-full h-full object-center object-cover"
              src="src/resources/images/sl-2-equipe-cotripam.png "
            />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img
              alt=""
              className="w-full h-[600px] object-center object-cover"
              src="src/resources/images/sl-3-producao.jpeg "
            />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img
              alt=""
              className="w-full h-[600px] object-center object-cover"
              src="src/resources/images/sl-4-mocoto2.jpeg "
            />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img
              alt=""
              className="w-full h-[600px] object-center object-cover"
              src="src/resources/images/sl-5-mocoto.jpeg "
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={
                currentSlide === instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(
            (idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              );
            },
          )}
        </div>
      )}
    </>
  );
}

function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}
