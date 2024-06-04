import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const StyledCarousel = styled(Carousel)({
  "& .react-multi-carousel-item": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  "& .react-multi-carousel-track": {
    display: "flex",
    alignItems: "center"
  }
});

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover"
});

const StyledBanner = styled("img")({
  width: "100%"
});

const Banner = ({ movies }) => {
  return (
    <Box style={{ width: "75%" }}>
      <StyledCarousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        key={true}
        slidesToSlide={1}
      >
        {movies.length > 0 &&
          movies.map(movie => (
            <StyledBanner
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="banner"
            />
          ))}
      </StyledCarousel>
    </Box>
  );
};

export default Banner;
