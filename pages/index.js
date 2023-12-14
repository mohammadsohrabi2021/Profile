import { Grid, Typography } from "@mui/material";
import React from "react";
import background from "../assets/image/banner.jpg";
function Home() {
  const bgColorStyling = {
    backgroundImage: `url(${background.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Grid
      style={bgColorStyling}
      height={{ xs: "92.2vh", md: "100vh" }}
      sx={{ width: "100vw" }}
      display={'flex'}
      justifyContent={"center"}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Typography fontFamily={'inherit'} fontSize={'50px'} fontWeight={'bold'} mb={'15px'}>محمد سهرابی</Typography>
      <Typography fontSize={'20px'} fontWeight={300} lineHeight={1.2}>برنامه نویس و توسعه دهنده وب</Typography>
    </Grid>
  );
}

export default Home;
