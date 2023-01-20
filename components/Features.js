import { Box, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillTagFill } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";
const Features = () => {
  return (
    <Box
      maxW="1024px"
      margin={[null, null, null, "auto"]}
      px={["20px", "20px", "20px", "60px"]}
      py={["30px", "60px"]}
    >
      <Stack
        direction={["column", "column", "row"]}
        px={["20px", "60px"]}
        spacing={["5", "5", "10"]}
      >
        <HStack spacing="5">
          <BsShieldFillCheck
            color="blue"
            size={useBreakpointValue(["30px", "30px", "35px", "45px"])}
          ></BsShieldFillCheck>
          <Text
            textAlign="left"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            color="#171923"
          >
            30 days money back guarantee
          </Text>
        </HStack>
        <HStack spacing="5">
          <BsFillTagFill
            size={useBreakpointValue(["30px", "30px", "35px", "45px"])}
            color="blue"
          ></BsFillTagFill>
          <Text
            textAlign="left"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            color="#171923"
          >
            No setup fees 100% hassle-free
          </Text>
        </HStack>
        <HStack spacing="5">
          <MdOutlineRestartAlt
            size={useBreakpointValue(["35px", "35px", "45px", "55px"])}
            color="blue"
          ></MdOutlineRestartAlt>
          <Text
            textAlign="left"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            color="#171923"
          >
            No monthly subscription. Pay once and for all
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Features;
