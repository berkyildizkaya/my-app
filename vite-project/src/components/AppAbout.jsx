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
      listItems:['CODE128B kullanarak kullanıcıların günlük iş yüklerini azaltacak akıllı okutma sistemi oluşturdum.','Şirket içinde geliştirdiğim otomatik üretim kontrol aracı sayesinde üretim süreçleriminizin daha verimli hale gelmesini sağladım.'],
      status : '08.2023 - Halen devam ediyorum.'
    },
    {
      photoSrc: "https://i.hizliresim.com/jqn74no.png",
      companyUrl: "https://www.lisi-aerospace.com/en/",
      companyName: 'Lisi AeroSpace',
      title : 'Intern',
      companyDescription : 'Fransız Menşeili Uçaklar için vida üretimi yapan tek adresli bir  üretim tesisi.',
      listItems:['ASP .NET MVC kullanarak geliştirdiğim sistem, gün içerisinde geç gelen personelleri tespit ederek etkili bir raporlama sağlıyor ve işyerindeki zaman yönetimini iyileştirdi.'],
      status : '07.2017 - 08.2017'
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
      <Flex direction={{ base: 'row', md: 'column' }} justify={"space-around"} align={"center"} p={"5"}  >
      {
          myExperiences.map((experience, index) => (
            <ExperienceCard  key={index} {...experience} />
          ))
        }
      </Flex>
      </div>
    </>
  );
};

export default AppAbout;
