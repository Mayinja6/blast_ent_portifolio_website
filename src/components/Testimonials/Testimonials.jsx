import { useRef } from "react";
import Slider from "react-slick";
// import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { orangeThemeDark as theme } from "../../utils/theme";
import { user1, user2, user3, user4, user5, user6 } from "../../assets";
import { FormatQuote, ArrowLeft, ArrowRight } from "@mui/icons-material";

import "./Testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Chandler Bing",
      title: "Transponster",
      text: "Building my own portfolio could've never been easier than this. The only areas I'm good at are Math, Jokes and Dance.",
      image: user1,
    },
    {
      id: 2,
      name: "Monica Geller",
      title: "Head Chef",
      text: "This is the only thing that I didn't have to spend time to sort out. It's tidy all by itself.",
      image: user2,
    },
    {
      id: 3,
      name: "Phoebe Buffay",
      title: "Massuese",
      text: "Heard of the song 'Smelly Cat!!' ? This website made it viral. Plus portfolio is the only thing that Ursula doesn't have :)",
      image: user3,
    },
    {
      id: 4,
      name: "Joey Tribbiani",
      title: "Actor",
      text: "Making my portfolio with this helped me get my role as 'Dr. Drake Ramoray' in 'Days Of Our Lives'. You guys are the best !",
      image: user6,
    },
    {
      id: 5,
      name: "Rachel Green",
      title: "Sales Executive",
      text: "Ralph Lauren was one of the best things that ever happened to me. My portfolio made that dream happen. I owe you guys.",
      image: user4,
    },
    {
      id: 6,
      name: "Ross Geller",
      title: "Paleontologist",
      text: "Be it 'Rocks' or 'Bones', you need a website to display it. This is it. Great work guys !",
      image: user5,
    },
  ];

  const sliderRef = useRef();

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {testimonialsData.length > 0 && (
        <div
          className="testimonials"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="testimonials--header">
            <h1 style={{ color: theme.secondary }}>Testimonials</h1>
          </div>
          <div className="testimonials--body">
            <FormatQuote className="quote" style={{ color: theme.secondary }} />
            <div
              className="testimonials--slider"
              style={{ backgroundColor: theme.primary }}
            >
              <Slider {...settings} ref={sliderRef}>
                {testimonialsData.map((test) => (
                  <div className="single--testimony" key={test.id}>
                    <div className="testimonials--container">
                      <div
                        className="review--img"
                        style={{
                          backgroundColor: theme.secondary,
                        }}
                      >
                        <img src={test.image} alt={test.name} />
                      </div>
                      <div
                        className="review--content"
                        style={{
                          backgroundColor: theme.secondary,
                          color: theme.tertiary,
                        }}
                      >
                        <p>{test.text}</p>
                        <h1>{test.name}</h1>
                        <h4>{test.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <button
                className="prevBtn"
                onClick={gotoPrev}
                style={{ backgroundColor: theme.secondary }}
              >
                <ArrowLeft
                  style={{ color: theme.primary }}
                  aria-label="Previous testimonial"
                />
              </button>
              <button
                className="nextBtn"
                onClick={gotoNext}
                style={{ backgroundColor: theme.secondary }}
              >
                <ArrowRight
                  style={{ color: theme.primary }}
                  aria-label="Next testimonial"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
