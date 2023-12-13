import { Flex, Box, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const AppProjects = () => {
  const projects = [
    {
      title: "Web Scrapper JS",
      imageUrl: "https://www.webharvy.com/images/web%20scraping%20uses.png",
      githubLink: "https://github.com/berkyildizkaya/WebScrapperJS",
      demoLink: "https://chakra-ui.com",
    },
  ];
  return (
    <>
      <div>
        <Flex bg={"green.700"}>
          <Box maxW={"md"} mt={"3"} ml={"3"}>
            <Text fontSize="4xl" color={"white"}>
              Projects
            </Text>
          </Box>
        </Flex>
        <Flex
          direction={{ base: "row", md: "row" }}
          justify={"space-evenly"}
          align={"center"}
          p={"5"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Flex>
      </div>
    </>
  );
};

export default AppProjects;
