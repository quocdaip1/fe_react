import {
  Text,
  Stack,
  Box,
  Image,
  Flex,
  FormControl,
  FormLabel,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  VStack,
  textDecoration,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Spacer,
  Square,
  Grid,
  GridItem,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ProductsPage = () => {
  const site_header = require("../../media/site-header.jpg");
  const logo1 = require("../../media/brand/1.jpg");
  const logo2 = require("../../media/brand/2.jpg");
  const logo3 = require("../../media/brand/3.jpg");
  const logo4 = require("../../media/brand/4.jpg");
  const logo5 = require("../../media/brand/5.jpg");

  const [values, setValues] = useState([10, 100]);
  const [limit, setLimit] = useState([10, 100]);

  const formatTooltipValue = (value) => {
    return limit[0] !== undefined ? value + "$" : "";
  };

  const onChange = (newValue) => {
    setValues(newValue);
    setLimit([newValue[0], newValue[1]]);
  };

  const filtersList = [
    {
      label: "categories",
      filters: [
        {
          label: "Bracelets",
          quanlity: 9,
        },
        {
          label: "Earrings",
          quanlity: 9,
        },
        {
          label: "Necklaces",
          quanlity: 9,
        },
        {
          label: "Rings",
          quanlity: 9,
        },
      ],
    },
    {
      label: "price",
    },
    {
      label: "color",
      filters: [
        {
          label: "Antique",
          quanlity: 9,
          code: "#d4937d",
        },
        {
          label: "Bone",
          quanlity: 9,
          code: "#e5d4c2",
        },
        {
          label: "Chestnut",
          quanlity: 9,
          code: "#9d443e",
        },
        {
          label: "Crimson",
          quanlity: 9,
          code: "#d9bf7a",
        },
        {
          label: "Eggshell",
          quanlity: 9,
          code: "#f1ead7",
        },
        {
          label: "Grullo",
          quanlity: 9,
          code: "#a19d80",
        },
      ],
    },
    {
      label: "size",
      filters: [
        {
          label: "L",
        },
        {
          label: "M",
        },
        {
          label: "S",
        },
      ],
    },
    {
      label: "brands",
      filters: [
        {
          logo: logo1,
        },
        {
          logo: logo2,
        },
        {
          logo: logo3,
        },
        {
          logo: logo4,
        },
        {
          logo: logo5,
        },
      ],
    },
  ];

  return (
    <>
      <Box as="section" pb="10">
        <Box
          w="100%"
          h="50vh"
          backgroundPosition="center center"
          objectFit="cover"
          backgroundImage={`url(${site_header})`}
          borderBottom="1px solid"
          borderColor="gray.100"
        ></Box>
      </Box>
      <Box w="100%" h="auto" as="main">
        <Flex px="8">
          <Box flex={2}>
            {filtersList &&
              filtersList.map(({ label, filters }) => {
                return (
                  <Box mb="5" key={label}>
                    <Text
                      mb="5"
                      fontSize="2xl"
                      fontWeight="600"
                      fontFamily="Cormorant Garamond,serif"
                      textTransform="uppercase"
                      letterSpacing="2px"
                    >
                      {label}
                    </Text>
                    {label !== "price" &&
                    label !== "brands" &&
                    label !== "size" ? (
                      <Stack>
                        {filters?.map((child) => {
                          return (
                            <Link
                              style={{ color: "gray", marginBottom: "2px" }}
                              key={child.label}
                            >
                              <Flex
                                w="100%"
                                letterSpacing=".2px"
                                fontSize="md"
                                justifyContent="space-between"
                              >
                                <Box display="flex">
                                  {label === "color" ? (
                                    <Box
                                      w="20px"
                                      h="20px"
                                      mr="5px"
                                      bg={child.code}
                                    />
                                  ) : null}

                                  <Text>{child.label}</Text>
                                </Box>

                                {label !== "size" && label !== "Brands" ? (
                                  <Box
                                    bg="gray.100"
                                    w="20px"
                                    h="20px"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    borderRadius="50%"
                                  >
                                    {child.quanlity}
                                  </Box>
                                ) : null}
                              </Flex>
                            </Link>
                          );
                        })}
                      </Stack>
                    ) : label === "price" ? (
                      <RangeSlider
                        mb={5}
                        aria-label={["min", "max"]}
                        defaultValue={values}
                        min={0}
                        max={100}
                        onChange={onChange}
                        minStepsBetweenThumbs={5}
                      >
                        <RangeSliderTrack>
                          <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <Tooltip
                          bg="none"
                          color="black"
                          boxShadow="none"
                          placement="bottom"
                          pl={3}
                          pr={3}
                          label={formatTooltipValue(limit[0])}
                          isOpen={true}
                        >
                          <RangeSliderThumb index={0} />
                        </Tooltip>
                        <Tooltip
                          bg="white"
                          boxShadow="none"
                          color="black"
                          placement="bottom"
                          pl={3}
                          pr={3}
                          label={formatTooltipValue(limit[1])}
                          isOpen={true}
                        >
                          <RangeSliderThumb index={1} />
                        </Tooltip>
                      </RangeSlider>
                    ) : label === "brands" || label === "size" ? (
                      <Grid
                        templateColumns={
                          label === "brands"
                            ? "repeat(3, 75px)"
                            : "repeat(3, 40px)"
                        }
                        gap={label === "brands" ? "4" : "1"}
                      >
                        {filters?.map((child, index) => {
                          return (
                            <GridItem key={index}>
                              <Link>
                                <Box
                                  w={label === "size" ? "40px" : "80px"}
                                  h={label === "size" ? "40px" : "80px"}
                                  backgroundImage={
                                    label === "brands" ? child.logo : null
                                  }
                                  display={"flex"}
                                  justifyContent="center"
                                  alignItems="center"
                                  backgroundSize="cover"
                                  backgroundRepeat="no-repeat"
                                  border="1px solid black"
                                >
                                  <Text>{child.label}</Text>
                                </Box>
                              </Link>
                            </GridItem>
                          );
                        })}
                      </Grid>
                    ) : null}
                  </Box>
                );
              })}
          </Box>

          <Box flex={8}></Box>
        </Flex>
      </Box>
    </>
  );
};
export default ProductsPage;
