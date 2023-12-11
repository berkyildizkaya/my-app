import AppAbout from "./AppAbout";
import AppNavBar from "./AppNavBar";
import AppPersonal from "./AppPersonal";

const Home = () => {
  return (
    <>
      <AppNavBar />
      <AppPersonal/>
      <AppAbout/>
    </>
  );
};

export default Home;