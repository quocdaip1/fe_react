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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ProductsPage = () => {
  const site_header = require("../../media/site-header.jpg");

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
  ];

  return (
    <>
      <Box as="section" pb={[5, 10]}>
        <Flex
          w="100vw"
          h="50vh"
          objectFit="cover"
          backgroundPosition="center center"
          backgroundImage={`url(${site_header})`}
          borderBottom={"1px solid"}
          borderColor="gray.100"
        ></Flex>
      </Box>

      <Box as="main">
        <Flex px="8">
          <Box flex={2}>
            {filtersList &&
              filtersList.map(({ label, filters }) => {
                return (
                  <Box  mb="5" key={label}>
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
                    {label !== "price" ? (
                      <Stack>
                        {filters &&
                          filters.map((child) => {
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
                                      <Box w="20px" h="20px" bg={child.code} />
                                    ) : null}
                                    <Text>{child.label}</Text>
                                  </Box>
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
                                </Flex>
                              </Link>
                            );
                          })}
                      </Stack>
                    ) : (
                      <RangeSlider
                        aria-label={["min", "max"]}
                        defaultValue={[10, 30]}
                      >
                        <RangeSliderTrack>
                          <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                      </RangeSlider>
                    )}
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
