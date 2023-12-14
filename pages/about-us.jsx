import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import sohrabi from "../assets/image/sohrabi.JPG";
function AboutUs() {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={{xs:'100%',md:'85%',lg:'88%'}}
      gap={'30px'}
      mt={{xs:25,sm:20,md:10}}
    >
      <Typography
        variant="h1"
        fontSize={"32px"}
        fontWeight={"bold"}
        fontFamily={"inherit"}
        mt={{xs:30,sm:0}}
        zIndex={99}
      >
        درباره من
      </Typography>
      <Grid borderRadius={'15px'} p={{xs:0,md:4}} py={{xs:3}} bgcolor={"rgba(0, 0, 0, .5)"} display={'flex'} justifyContent={'center'}alignItems={'center'} flexDirection={{xs:'column',md:'row-reverse'}} width={{xs:'100%',md:'95%'}} height={'auto'}>
        <Image
          src={sohrabi}
          alt={"mohammad sohrabi"}
          style={{ width: "220px", height: "180px", borderRadius: "100%" }}
        />
        <Grid width={'95%'} display={'flex'}  flexDirection={'column'} px={"15px"} pt={3}>
          <Typography variant="h4"   display={'flex'} justifyContent={'flex-end'}>
            محمد سهرابی
          </Typography>
          <Typography lineHeight={'30px'} textAlign={'justify'} style={{direction:'rtl'}}>{`با اشتیاق و علاقه زیاد، از کودکی به دنبال یادگیری مفاهیم کامپیوتر و برنامه‌نویسی بوده‌ام. اولین هدف من از یادگیری زبان‌های برنامه‌نویسی، توسعه نرم‌افزارهای وب و طراحی سایت بود. با شروع از پروژه‌های کوچک مثل وبسایت‌های شخصی، به تدریج به توسعه وب‌سایت‌های پیچیده‌تر و پویا پرداختم.

همواره به دنبال یادگیری تکنولوژی‌های جدید بوده و همیشه به دنبال به‌روز بودن با روند رو به جلوی تکنولوژی بوده‌ام. از آغاز کار در زمینه برنامه‌نویسی وب، به توسعه نرم‌افزارهای متنوع و پروژه‌های دینامیک تر مشغول به کار شدم.

تجربه برنامه‌نویسی و طراحی سایت من از ساخت وبسایت‌های شخصی و وبلاگ‌ها شروع شده و به توسعه سامانه‌های مدیریت محتوا و فروشگاه‌های آنلاین گسترش یافته است. همچنین، با استفاده از ابزارها و فریمورک‌های مدرن برنامه‌نویسی وب، به بهبود رابط کاربری (UI) و تجربه کاربری (UX) در پروژه‌هایم اهتمام می‌کنم.

در مورد آینده، علاقه دارم توانمندی‌هایم را در زمینه‌های پیشرفته‌تر مانند توسعه اپلیکیشن‌های وب پیشرو، تکنولوژی‌های جدید و بهینه‌سازی عملکرد وبسایت‌ها افزایش دهم. همچنین، دستیابی به تجربیات جدید در زمینه هوش مصنوعی و افزوده شده نیز در دستور کار من قرار دارد.`}</Typography>
        </Grid>
        
      </Grid>
      <Typography
        variant="h1"
        fontSize={"32px"}
        fontWeight={"bold"}
        fontFamily={"inherit"}
        mt={{xs:5,sm:0}}
      >
        علایق من
      </Typography>
      <Typography
        variant="h1"
        fontSize={"32px"}
        fontWeight={"bold"}
        fontFamily={"inherit"}
        mt={{xs:5,sm:0}}
      >
       خدمات من
      </Typography>
    </Grid>
  );
}

export default AboutUs;
