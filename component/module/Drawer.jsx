import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { dataMuneItem } from "@/public/Data/MuneData";
import { Grid } from "@mui/material";
import Link from "next/link";

function DrawerMune({ openDrawer, setOpenDrawer }) {
  const closeHandler = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer  anchor={"right"} open={openDrawer} onClose={closeHandler} PaperProps={{ style: { backgroundColor: 'rgb(18,26,36)',color:'#fff',paddingTop:'60px' } }}>
        {
            dataMuneItem.map(item=><Grid onClick={closeHandler} p={'20px 40px'}  key={item.id}>
                <Link href={item.href}>{item.icon}</Link>
            </Grid>)
        }
    </Drawer>
  );
}

export default DrawerMune;
