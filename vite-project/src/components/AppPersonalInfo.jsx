import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const AppPersonalInfo = () => {
  return (
    <>
      <Flex
        bg={"gray.200"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        direction={"row-reverse"}
      >
        <Box maxW={"md"}>
        <Image rounded={"md"}  objectfit={"cover"}  src={"https://i.hizliresim.com/6hldrvf.jpeg"}></Image>
        </Box>
        <Box maxW={"lg"}>
          <Flex direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Heading size={"lg"}>BERK YILDIZKAYA</Heading>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">Jr.React Developer</Text>
            <Text as='samp'>Jr.React Developer olarak, web teknolojilerine ve özellikle React framework'üne olan tutkumu mesleğimde başarılı bir şekilde kullanıyorum. Yazılım dünyasında her geçen gün öğrenmeye ve gelişmeye açık, yeniliklere hızla adapte olabilen bir geliştiriciyim.</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
export default AppPersonalInfo;

{
  /* <Flex>
<Flex px={4} py={4} p={"1"} >
<Stack spacing={4} align={"center"}>
    <Heading>
        BEN KIMIM ? 
    </Heading>
</Stack>
</Flex>
<Flex>
    <Image round  ed={"md"}  objectfit={"cover"}  src={"https://i.hizliresim.com/6hldrvf.jpeg"}></Image>
</Flex>
</Flex> */
}
