import { Box, Slide, styled } from "@mui/material";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import CarouselSlide from "./CarouselSlide";
import MidSection from "./MidSection";
import Covid from "./Covid";

const WrapperComponent = styled(Box)`
  margin-top: 55px;
`;
const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getProduct());
    console.log("getProduct is called");
    setLoading(true);
  }, [dispatch]);

  const { products } = useSelector((state) => state.getProduct);

  const item = products?.data;

  return (
    <WrapperComponent>
      <Navbar />
      <Container>
        <Banner />
        {item && (
          <>
            <CarouselSlide item={item} title="Deal of the day!" timer={true} />
            <CarouselSlide item={item} title="Discount for you" timer={false} />
            <MidSection />
            <CarouselSlide item={item} title="Suggested Item" timer={false} />
            <CarouselSlide item={item} title="Season top pick " timer={false} />
            <Covid />
            <CarouselSlide item={item} title="Trending" timer={false} />
            <CarouselSlide item={item} title="Trending offers" timer={false} />
          </>
        )}
      </Container>
    </WrapperComponent>
  );
}

export default Home;
