import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDots";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: {
    image:string,
    text1:string,
    text2:string
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

 

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide,index) => (
            <div className="embla__slide" key={index}>
              <div className="group w-[300px] h-[300px] text-gray-900  bg-clip-padding backdrop-filter backdrop-blur-sm   cursor-pointer mx-3 p-6 flex flex-col items-center justify-between rounded-2xl   text-center transition-all duration-300 bg-indigo-400 shadow-lg">
                  <img
                    src={slide.image}
                    alt={slide.text2}
                    className="w-[170px] h-[170px] transition-all duration-300 group-hover:scale-110"
                  />
                <h3 className="mt-4 text-lg font-bold">{slide.text1}</h3>
                <p className="">{slide.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
