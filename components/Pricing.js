import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Pricing = () => {
  return (
    <>
      <Box
        maxW={["300px", "480px", "620px", "750px", "950px"]}
        bg="red.300"
        margin="auto"
        mt={["-32", "-20", "-20"]}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        borderRadius="lg"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg=" #F0EAFB" p="60px" w={[null, null, null, "50%"]}>
            <Text fontSize={["xl", "2xl"]} fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["4xl", "4 xl", "6xl"]}>
              $200
            </Heading>
            <Text
              color="#171923"
              fontSize={["md", "lg"]}
              fontWeight="medium"
              mt="4"
            >
              billed only once
            </Text>
            <Button
              bg="#805AD5"
              size="lg"
              w={["100%"]}
              color="white"
              mt="10"
              _hover={{ bg: "blue.400", color: "white" }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            px={["20px", "60px"]}
            py={["30px", "60px"]}
            fontSize={["lg", "xl"]}
            bg="white"
          >
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>

            <Stack spacing="5" pt="6">
              <List spacing="5">
                <ListItem>
                  <CheckCircleIcon color="blue.500" mr="4" />
                  International calling and messaging API
                </ListItem>
                <ListItem>
                  <CheckCircleIcon color="blue.500" mr="4" />
                  Additional phone numbers
                </ListItem>
                <ListItem>
                  <CheckCircleIcon color="blue.500" mr="4" />
                  Automated messages via Zapier
                </ListItem>

                <ListItem>
                  <CheckCircleIcon color="blue.500" mr="4" />
                  24/7 support and consulting
                </ListItem>
              </List>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Pricing;
