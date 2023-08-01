// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Box,
  Button,
  Container,
  Image,
  Flex,
  Spacer,
  HStack,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";

import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  const logo = require("../../../media/logo.png");

  const iconsHeaderelement = [
    {
      elementIcon: <CiSearch />,
    },
    {
      elementIcon: <CiUser />,
    },
    {
      elementIcon: <CiHeart />,
      Notification: "1",
    },
    {
      elementIcon: <BsBag />,
      Notification: "1",
    },
  ];
  return (
    <Box
      as="nav"
      bg="white"
      position={"relative"}
      border="1px"
      borderColor="gray.100"
    >
      <Flex p="9">
        <Box flex={1}>
          <Link>
            <Image
              boxSize="100px"
              objectFit="cover"
              maxHeight="30px"
              width="auto"
              src={logo}
            />
          </Link>
        </Box>
        <NavBar />
        <HStack flex={1} justifyContent={"flex-end"} spacing="15px">
          {iconsHeaderelement &&
            iconsHeaderelement.map((item, index) => {
              return (
                <Box key={index} position="relative">
                  <IconButton
                    _hover={{ transform: "translateY(-2px)" }}
                    bg="none"
                    fontSize="20px"
                    icon={item.elementIcon}
                  />
                  {item.Notification > 0 ? (
                    <Box
                      position="absolute"
                      top="0"
                      right="0"
                      transform="translate(50%, -50%)"
                      bg="black"
                      color="white"
                      width="18px"
                      height="18px"
                      borderRadius="50%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="12px"
                      fontWeight="400"
                    >
                      {item.Notification}
                    </Box>
                  ) : null}
                </Box>
              );
            })}
        </HStack>
      </Flex>
    </Box>
  );
};
export default Header;
