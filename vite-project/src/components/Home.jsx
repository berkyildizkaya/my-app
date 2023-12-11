import AppAbout from "./AppAbout";
import AppNavBar from "./AppNavBar";
import AppPersonalInfo from "./AppPersonalInfo";

const Home = () => {
  return (
    <>
      <AppNavBar />
      <AppPersonalInfo/>
      <AppAbout/>
    </>
  );
};

export default Home;