import { Link, useLocation } from "react-router-dom";
import {
  Stack,
  HStack,
  VStack,
  StackDivider,
  Box,
  Icon,
  Button,
  Text,
  Popover,
  PopoverTrigger,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { pathname } = useLocation();

  const navigation = [
    {
      label: "Home",
      value: "/",
    },
    {
      label: "Shop",
      value: "/shop",
    },
    {
      label: "Blog",
      value: "/blog",
    },
    {
      label: "About us",
      value: "/aboutus",
    },
    {
      label: "Contact",
      value: "/contact",
    },
  ];

  return (
    <HStack spacing="30px">
      {navigation &&
        navigation.map(({ label, value }) => (
          <Stack
            key={label}
            position="relative"
            _hover={{
              cursor: "pointer",
              ".navLine": {
                width: "100%",
              },
            }}
          >
            <Popover trigger="hover">
              <PopoverTrigger>
                <Box>
                  <Link to={value}>
                    <Text
                      letterSpacing="2px"
                      fontSize="md"
                      textTransform="uppercase"
                    >
                      {label}
                    </Text>
                  </Link>
                </Box>
              </PopoverTrigger>
              <Box
                className="navLine"
                position="absolute"
                bottom="-2px"
                left="0"
                width={pathname === value ? "100%" : "0%"}
                height="1px"
                bg="#000"
                transition="width 0.4s"
              />
            </Popover>
          </Stack>
        ))}
    </HStack>
  );
};

export default NavBar;
