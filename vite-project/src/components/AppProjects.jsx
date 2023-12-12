import { Flex,Box,Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const AppProjects = () =>{
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
        <Flex direction={{ base: 'row', md: 'row' }} justify={"space-around"} align={"center"} p={"5"}  >
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </Flex>
        
        </div>
        </>
    )
}

export default AppProjects;