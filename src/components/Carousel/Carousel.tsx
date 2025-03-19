import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

const Carousel = ({ work }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Function to go to the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Function to go to the previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Ensure Embla is re-initialized when images change
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, work.images]);

  return (
    <>
      {work.images && (
        <div className={styles.carouselWrapper}>
          <button className={styles.prevButton} onClick={scrollPrev}>
            ◀
          </button>
          <div ref={emblaRef} className={styles.embla}>
            <div className={styles.emblaContainer}>
              {work.images.map((image, index) => (
                <div key={index} className={styles.emblaSlide}>
                  <img
                    src={image}
                    alt={work.title}
                    className={styles.emblaImage}
                  />
                </div>
              ))}
            </div>
          </div>
          <button className={styles.nextButton} onClick={scrollNext}>
            ▶
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;
