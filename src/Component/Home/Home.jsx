import Header from "./Header/Header";
import Body from "./Body/Body";
import FooterContainer from "../Footer/FooterContainer";

const Home = () => {
  return (
    <div className="md:container md:mx-auto">
      <Header />
      <Body />
      <FooterContainer />
    </div>
  );
};

export default Home;
