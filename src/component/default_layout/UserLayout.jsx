import { Box } from "@chakra-ui/react";
import Header from "../layout_part/UserLayout_part/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default UserLayout;
