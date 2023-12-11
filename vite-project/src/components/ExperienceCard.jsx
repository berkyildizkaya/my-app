import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Image, Link, Text, UnorderedList, ListItem } from '@chakra-ui/react';
const ExperienceCard = ({ photoSrc, companyUrl, companyName, title, companyDescription, listItems,status }) => {
  return (
    <div>
      <Card maxW={"xl"}  mt={"5"}>
        <CardHeader>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Image
              
              boxSize={"37"}
                src={photoSrc}
                alt={companyName}
              />
            </Box>

            <Box>
              <Link fontSize="xl" href={companyUrl} isExternal>
                {companyName}
              </Link>
            </Box>

            <Box>
              <Text fontSize={"xl"}>{title}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            {companyDescription}
          </Text>
          <UnorderedList>
            {listItems.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </CardBody>
        <CardFooter>
          <Text>{status}</Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExperienceCard;

