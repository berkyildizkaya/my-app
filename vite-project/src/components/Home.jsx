import AppAbout from "./AppAbout";
import AppNavBar from "./AppNavBar";
import AppPersonal from "./AppPersonal";
import AppProjects from "./AppProjects";

const Home = () => {
  return (
    <>
      <AppNavBar />
      <AppPersonal/>
      <AppAbout/>
      <AppProjects/>
    </>
  );
};

export default Home;