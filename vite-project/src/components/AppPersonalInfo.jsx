import { Flex, Heading, Image, Stack } from "@chakra-ui/react";

const AppPersonalInfo = () => {
    return (
<>
<Flex>
<Flex px={4} py={4} p={"1"} >
<Stack spacing={4} align={"center"}>
    <Heading>
        BEN KIMIM ? 
    </Heading>
</Stack>
</Flex>
<Flex>
    <Image rounded={"md"}  objectfit={"cover"}  src={"https://i.hizliresim.com/6hldrvf.jpeg"}></Image>
</Flex>
</Flex>
</>
)
};
export default AppPersonalInfo
 