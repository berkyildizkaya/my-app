import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const AppPersonal = () => {
  return (
    <>
      <Flex
        bg={"gray.200"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        direction={{ base: 'column', md: 'row' }}
        p={5}
      >
        <Box maxW={"lg"}>
        <Flex direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Heading size={"lg"}>BERK YILDIZKAYA</Heading>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">Jr.React Developer</Text>
            <Text as='samp'>Jr.React Developer olarak, web teknolojilerine ve özellikle React framework'üne olan tutkumu mesleğimde başarılı bir şekilde kullanıyorum. Yazılım dünyasında her geçen gün öğrenmeye ve gelişmeye açık, yeniliklere hızla adapte olabilen bir geliştiriciyim.</Text>
          </Flex>
        </Box>
        <Box maxW={"sm"}>
        <Image rounded={"md"}  w={"100%"} h={"auto"} objectFit={"cover"} margin={0} src={"https://i.hizliresim.com/6hldrvf.jpeg"}/>
        </Box>
      </Flex>
    </>
  );
};
export default AppPersonal;