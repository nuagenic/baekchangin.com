import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import { WorkItem } from "../../assets/worksList";

const Carousel = ({ work }: { work: WorkItem }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Function to go to the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Function to go to the previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <>
      {work.images && (
        <div className={styles.carouselWrapper}>
          <button className={styles.prevButton} onClick={scrollPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 22L6 12L16 2L17.775 3.775L9.55 12L17.775 20.225L16 22Z"
                fill="#F1F1F1"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                fill="#F1F1F1"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;
