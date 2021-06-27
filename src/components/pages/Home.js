import { useEffect, useState } from "react";

import {
  home_FullBGWithText,
  home_directory_MainIllustration,
  home_directory_LHSGraphic,
  home_blog_MainIllustration,
  home_donor_MainIllustration,
  home_donor_LHSPuzzle,
} from "../../assets";

// import "./Home.css";
import "./Home.css";

const Home = () => {
  //Content for the carousel
  const slides = [
    [
      "home-directory",
      <>
        <img src={home_directory_LHSGraphic} className="figure1" />
        <div className="home-slide-content pure-g">
          <div className="home-slide-left pure-u-1-2">
            <h1 className="dir-h1">THE DIRECTORY</h1>
            <p className="dir-p">
              Find the right therapist, counsellor, or psychologists for you.
              Visit our directory of verified mental health professionals and
              use our filters to create your shortlist!
            </p>
            <button className="dir-btn">VISIT</button>
          </div>
          <div className="home-slide-right pure-u-1-2 home-slide-right-directory">
            <img src={home_directory_MainIllustration} className="pure-img" />
          </div>
        </div>
      </>,
    ],

    [
      "home-blog",
      <>
        <div className="home-slide-content pure-g">
          <div className="home-slide-left pure-u-1-2">
            <h1 className="blog-h1">FEATURED BLOG</h1>
            <p className="blog-p">
              For IIT Roorkee only
              <br></br>
              Don't know if therapy is for you? Try it out for free. Reach out
              to our partner donors and blah blah blah.
            </p>
            <button className="blog-btn">VISIT</button>
          </div>
          <div className="home-slide-right pure-u-1-2 home-slide-right-blog">
            <img src={home_blog_MainIllustration} className="pure-img" />
          </div>
        </div>
      </>,
    ],

    [
      "home-donor",
      <>
        <img src={home_donor_LHSPuzzle} className="figure1" />
        <div className="home-slide-content home-slide-content-donor pure-g">
          <div className="home-slide-left  pure-u-1-2">
            <h1 className="donor-h1">DONOR/DONEE</h1>
            <p className="donor-p">
              For IIT Roorkee only
              <br></br>
              Don't know if therapy is for you? Try it out for free. Reach out
              to our partner donors and blah blah blah.
            </p>
            <button className="donor-btn">VISIT</button>
          </div>
          <div className="home-slide-right pure-u-1-2 home-slide-right-donor">
            <img src={home_donor_MainIllustration} className="pure-img" />
          </div>
        </div>
      </>,
    ],
  ];
  const [slideNum, setSlideNum] = useState(0); //For keeping tab on which slide we are currently on

  const decrementSlide = () => {
    setSlideNum((value) => {
      return (slides.length + value - 1) % slides.length;
    });
  };

  const incrementSlide = () => {
    setSlideNum((value) => {
      return (value + 1) % slides.length;
    });
  };

  useEffect(() => {
    // For automatic slide increment
    const interval = setInterval(incrementSlide, 10000);

    // It ensures that as soon as component is unmounted interval is cleared
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-art">
        <img src={home_FullBGWithText} alt="Art" />
      </div>

      <div
        className={"home-slideshow-container " + slides[Math.abs(slideNum)][0]}
      >
        {slides[Math.abs(slideNum)][1]}
        <span className="home-prev" onClick={decrementSlide}>
          <ion-icon name="chevron-back-circle-outline"></ion-icon>
        </span>
        <span className="home-next" onClick={incrementSlide}>
          <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </span>

        <ul className="home-carousel-dots-container">
          {slides.map((slide, index) => {
            return (
              <li onClick={() => setSlideNum(index)} key={index}>
                {Math.abs(slideNum) === index ? (
                  <ion-icon name="ellipse"></ion-icon>
                ) : (
                  <ion-icon name="ellipse-outline"></ion-icon>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
