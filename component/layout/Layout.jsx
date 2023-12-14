import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import DrawerMune from "../module/Drawer";
import { dataMuneItem } from "@/public/Data/MuneData";
import Link from "next/link";
import { Tooltip } from "@mui/material";
function Layout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const clicHandler = () => {
    setOpenDrawer(!openDrawer);
  };
  console.log(openDrawer);
  return (
    <Grid position={"relative"}>
      <Box  sx={{ flexGrow: 1 }} display={{ xs: "flex", md: "none" }}>
        <AppBar position="static" sx={{ backgroundColor: "#070708",position:'fixed',top:0,right:0,left:0 }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={clicHandler}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <DrawerMune openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Box
        position={"fixed"}
        right={0}
        top={0}
        bottom={0}
        bgcolor={"rgb(18,21,24)"}
        pt={10}
        px={3}
        display={{ xs: "none", md: "flex" }}
        flexDirection={'column'}
      >
        {dataMuneItem.map((item) => (
          <Grid p={"20px 40px"} key={item.id}>
            <Tooltip title={item.title} placement="top">
              <Link href={item.href}>{item.icon}</Link>
            </Tooltip>
          </Grid>
        ))}
      </Box>
      <Box>{children}</Box>
    </Grid>
  );
}

export default Layout;
