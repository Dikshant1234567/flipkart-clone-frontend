import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

const Wrapper = styled(Box)`
  margin-top: 10px;
  background: white;
`;
const Deal = styled(Box)`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-item: center;
`;

const ViewButton = styled(Button)`
  background: #2870f0;
  font-size: 13px;
  margin-left: auto;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const render = ({ hours, minutes, seconds }) => {
  return (
    <Box
      style={{ fontSize: 14, color: "#7f7f7f", paddingTop: 12 }}
      variant="span"
    >
      {hours} : {minutes} : {seconds}
    </Box>
  );
};

function CarouselSlide({ item, title, timer }) {
  return (
    <Wrapper>
      <Deal>
        <Typography id="deal-text" style={{ fontSize: 22, fontWeight: 600, margin: 10 }}>
          {title}
        </Typography>
        {timer && (
          <Box id="timmer"
           style={{ display: "flex", alignItem: "center", marginLeft: 10 }}>
            <img
              style={{ width: 18, marginRight: 10 }}
              src={timerURL}
              alt="timer"
            />
            <Countdown
              intervalDelay={1000}
              precision={3}
              renderer={render}
              date={Date.now() + 50400000}
            />
          </Box>
        )}
        <ViewButton id="view-btn" variant="contained">View all</ViewButton>
      </Deal>

      <Divider />

      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
      >
        {item &&
          item.map((productInfo, id) => {
            return (
              <Link to={`/product/${productInfo.id}`} key={id}>
                <Box textAlign="center" style={{ padding: "15px 25px" }}>
                  <Image src={productInfo.url} alt="img" />
                  <Text style={{ fontWeight: 600, color: "#212121" }}>
                    {productInfo.title.shortTitle}
                  </Text>
                  <Text style={{ color: "green" }}>{productInfo.discount}</Text>
                  <Text style={{ opacity: 0.6, color: "#212121" }}>
                    {productInfo.tagline}
                  </Text>
                </Box>
              </Link>
            );
          })}
      </Carousel>
    </Wrapper>
  );
}

export default CarouselSlide;
