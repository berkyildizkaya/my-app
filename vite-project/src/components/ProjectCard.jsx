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
  CardFooter,
  Button,
} from "@chakra-ui/react";
import {
  BsThreeDotsVertical,
  BsGithub,
  BsBoxArrowUpRight,
} from "react-icons/bs";

const ProjectCard = (props) => {
  const { title, imageUrl, githubLink, demoLink } = props;

  return (
    <>
      <div>
        <Card boxShadow="md" maxW={"md"} mt={"5"}>
          <CardHeader>
            <Image objectFit="cover" src={imageUrl} alt={title} />
          </CardHeader>

          <CardBody>
            <Flex
              gap={"4"}
              alignItems={"center"}
              flexWrap={"nowrap"}
              justifyContent={"space-between"}
            >
              <Box>
                <Text fontSize="2xl" color={"teal"}>
                  {title}
                </Text>
              </Box>
              <Spacer />
              <IconButton
                variant={"ghost"}
                colorScheme="gray"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardBody>
          <CardFooter
            justify="center"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button
              flex="1"
              variant="ghost"
              leftIcon={<BsGithub />}
              as={"a"}
              href={githubLink}
            ></Button>
            <Button
              flex="1"
              variant="ghost"
              leftIcon={<BsBoxArrowUpRight />}
              as={"a"}
              href={demoLink}
            ></Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
