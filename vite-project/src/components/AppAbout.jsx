import { Box, Flex, Text } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";

const AppAbout = () => {
  const myExperiences = [
    {
      photoSrc: "https://i.hizliresim.com/mj15vtu.png",
      companyUrl: "",
      companyName: 'Roy Robson',
      title : 'Software Developer',
      companyDescription : 'Dünya çapında takım elbise üretimi tek adresli üretim tesisi.',
      listItems:['CODE128B kullanarak kullanıcıların günlük iş yüklerini azaltacak akıllı okutma sistemi oluşturdum.','Şirket içinde geliştirdiğim otomatik üretim kontrol aracı sayesinde üretim süreçleriminizin daha verimli hale gelmesini sağladım.']
    },
  ];
  return (
    <>
      <div>
        <Flex bg={"green.700"}>
          <Box maxW={"md"} mt={"3"} ml={"3"}>
            <Text fontSize="4xl" color={"white"}>
              Experience
            </Text>
          </Box>
        </Flex>
        {
          myExperiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))
        }
      </div>
    </>
  );
};

export default AppAbout;
