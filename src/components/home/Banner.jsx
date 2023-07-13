import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import { bannerData } from "../constant/data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      infinite={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      swipeable={false}
      draggable={false}
      autoPlay={true}
    >
      {bannerData.map((data) => {
        return (
          <img
            key={data.id}
            src={data.url}
            alt="banner"     
            id="offer-images"
            style={{ width: "100%", height: 280 }}
          />
        );
      })}
    </Carousel>
  );
}

export default Banner;
