import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    IconButton,
    Text,
    Box,
    Image,
    Spacer,
    Collapse, // Import the Image component from Chakra UI
  } from "@chakra-ui/react";
  import { BsThreeDotsVertical } from "react-icons/bs";
  import { useState } from "react";

  const ProjectCard = () => {
    return (
      <>
        <div>
          <Card boxShadow='md' maxW={"md"} mt={"5"}>
            <CardHeader>
              <Image
                objectFit="cover"

                src="https://www.webharvy.com/images/web%20scraping%20uses.png"
                alt="Chakra UI"
              />
            </CardHeader>

            <CardBody>
              <Flex gap={"4"} alignItems={"center"} flexWrap={"wrap"}>
                <Box>
                  <Text>Web Scrapper JS</Text>
                </Box>
                <Spacer/>
                <IconButton
                  variant={"ghost"}
                  colorScheme="gray"
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardBody>

          </Card>
        </div>
      </>
    );
  };

  export default ProjectCard;
