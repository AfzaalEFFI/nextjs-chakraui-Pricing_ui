import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box as="seaction">
      <Box
        fontWeight="bold"
        px={["23px", "20px", "50px"]}
        py={["65px", "125px", "150px"]}
        h={["350px", null, null]}
        m={[null, null, null, "auto"]}
        bg="#6B46C1"
        color="#D1E8E2"
        textAlign={["left", "left", "center"]}
      >
        <Box px="20px">
          <Text
            fontSize={["23px", "30px", "35px", "50px"]}
            lineHeight={["27px", "35px", "45px"]}
            mb={["15px", null, null]}
            color=" #F7FAFC"
          >
            Simple pricing for your business
          </Text>
          <Text fontSize={["13px", "16px", "18px", "24px"]} color=" #F7FAFC">
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
